const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../model/userModel');
const Subscriber=require('../model/subscriberModel');
const sendEmail = require('../utils/emailVerification');
const sendResetEmail = require('../utils/resetPasswordEmail');
const crypto = require('crypto');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');
const Cryptr=require('cryptr');
const cryptr=new Cryptr("b1a8l1a0h2a0r0i3sankar");

//POST-/api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { username, name, email, password } = req.body;
    const user = await User.create({
        username,
        name,
        email,
        password
    })
    const validateToken = user.getValidateToken();
    await user.save({ validateBeforeSave: false });
    //create validation url
    const validateUrl = `https://linkbowl.netlify.app/auth/${validateToken}`;
    try {
        await sendEmail({
            emailId: email,
            verifyUrl: validateUrl
        }).then((response)=>{
            res.status(201).json({
                success: true,
                email: "sent"
            }).end();
        })
    }
    catch (err) {
        await User.findOneAndDelete({ username: user.username });
        res.status(404).json({ "success": false, message: err.message }).end();
    }
})

//POST-/api/v1/checkUserName
exports.checkUserName = catchAsyncError(async (req, res, next) => {
    const userName = req.body.username;
    if (userName.match(/[\W]/g) != null) {
        return next(new ErrorHandler('Username must Contain Alphabet,Number and _', 400))
    }
    const user = await User.findOne({ username: userName });
    if (user) {
        return next(new ErrorHandler('Username already exists', 400))
    }
    res.status(200).json({
        success: true,
        message: "Username available"
    })
})

//POST-/api/v1/checkUserId
exports.checkEmailId = catchAsyncError(async (req, res, next) => {
    const emailId = req.body.emailId;
    const user = await User.findOne({ email: emailId });
    if (user) {
        return next(new ErrorHandler('Email already registered', 400))
    }
    res.status(200).json({
        success: true,
        message: "Email Available"
    })
})
//POST-/api/v1/auth
exports.verifyEmail = catchAsyncError(async (req, res, next) => {
    const token = req.body.token;
    const validateToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({
        validateToken,
        validateTokenExpire: {
            $gt: Date.now()
        }
    })
    if (!user) {
        return next(new ErrorHandler('User not found or Email already verified', 404))
    }
    user.authenticated = true;
    user.validateToken = undefined;
    user.validateTokenExpire = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
        message: "Your Email has been Verified..."
    })
})
//POST-/api/v1/subscribe
exports.subscribeLinkBowl=catchAsyncError(async (req,res,next)=>{
    const{email}=req.body;
    const result=await Subscriber.create({
        email
    })
    if(!result)
        return next(new ErrorHandler('Subscription Failed', 400))
    res.status(201).json({
        success:true,
        message:"Subscribed Successfully"
    })
})
//POST-/api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }
    //finding user
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
        return next(new ErrorHandler('Invalid Username or Password', 400))
    }
    if (!user.authenticated) {
        return next(new ErrorHandler('Invalid Username or Password', 400))
    }
    if (! await user.isValidPassword(password)) {
        return next(new ErrorHandler('Invalid Username or Password', 400))
    }
    const token = user.getJwtToken();
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "none",
        secure: true
    }
    res.status(200).cookie('authToken', token, options).json({
        success: true,
        message: "Login Successfully",
    })
})

//GET-/api/v1/checkLoggedInOrNot
exports.checkLoggedInOrNot = catchAsyncError((req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) {
        return next(new ErrorHandler('Token can\'t Found', 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id) {
        res.json({
            success: true,
            message: "User Logged In "
        })
    }
})
//GET-/api/v1/logout
exports.logoutUser = (req, res, next) => {
    res.status(201).clearCookie('authToken', {
        httpOnly: true,
        sameSite: "none",
        secure: true
    }).json({
        success: true,
        message: "Logout Successfully"
    }).end();
}
//GET-/api/v1/deleteaccount
exports.deleteAccount = catchAsyncError(async (req, res, next) => {
    const { user } = req;
    User.findByIdAndDelete(user.id, (err, docs) => {
        if (err) {
            return next(new ErrorHandler(err, 400))
        }
        else {
            res.status(201).clearCookie('authToken', {
                httpOnly: true,
                sameSite: "none",
                secure: true
            }).json({
                success: true,
                message: "User Account Deleted"
            }).end();
        }
    })
})
//POST-/api/v1/user
exports.getUser = catchAsyncError(async (req, res, next) => {
    const { username } = req.body;
    const result = await User.findOne({ username: username })
    if (!result) {
        return next(new ErrorHandler("User not found", 404))
    }
    if (!result.authenticated) {
        return next(new ErrorHandler("User not found", 404))
    }
    const { avatar, name, bio, theme, email, links, id } = result;
    const publicLinks = links.filter(value => value.private === false);
    res.status(201).json({
        success: true,
        user: {
            id,
            avatar,
            name,
            bio,
            theme,
            email,
            links: publicLinks
        }
    })
})
//POST-/api/v1/requestResetPassword
exports.requestResetPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email, authenticated: true });
    if (!user)
        return next(new ErrorHandler("No User found with the given email", 404));
    const validateToken = user.getValidateToken();
    user.save({ validateBeforeSave: false });
    const validateUrl = `https://linkbowl.netlify.app/reset-password/${validateToken}`;
    try {
        await sendResetEmail({
            emailId: email,
            verifyUrl: validateUrl,
            name: user.name
        })
        res.status(201).json({
            success: true,
            email: "sent"
        });
    }
    catch (err) {
        user.validateToken = undefined;
        user.validateTokenExpire = undefined;
        user.save({ validateBeforeSave: false });
        res.status(404).json({ "success": false, message: err.message }).end();
    }
})

//POST-api/v1/verifyResetEmail
exports.verifyResetEmail=catchAsyncError(async(req,res,next)=>{
    const {token}=req.body;
    const validateToken=crypto.createHash('sha256').update(token).digest('hex');
    const user=await User.findOne({
        validateToken,
        validateTokenExpire:{
            $gt:Date.now()
        },
        authenticated:true
    });
    if(!user)
        return next(new ErrorHandler("The User Account not found",400));
    const updatedId=cryptr.encrypt(user.id);
    res.status(200).json({
        success:true,
        message:"Reset password request approved",
        tokenId:updatedId
    })
})
//POST - api/v1/resetpassword
exports.resetPassword=catchAsyncError(async (req,res,next)=>{
    const{token,newPassword}=req.body;
    const userId=cryptr.decrypt(token);
    const user=await User.findById(userId);
    if(!user)
        return next(new ErrorHandler("Reset Password Access Denied",404));
    if(!newPassword)
        return next(new ErrorHandler("Please enter Valid Password",404));
    if(!(newPassword.length>=8))
        return next(new ErrorHandler("Please enter Valid Password",500));
    user.password=newPassword;
    user.validateToken=undefined;
    user.validateTokenExpire=undefined;
    user.save({validateBeforeSave:false});
    res.status(201).json({
        success:true,
        message:"Password Changed Sucessfully",
    });
})