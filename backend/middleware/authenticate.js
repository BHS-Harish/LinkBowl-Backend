const ErrorHandler =require('../utils/errorHandler');
const jwt=require('jsonwebtoken');
const User=require('../model/userModel');
const catchAsyncError =require('./catchAsyncError');
exports.isAuthenticated=catchAsyncError(async (req,res,next)=>{
    const token=req.cookies.authToken;
    if(!token){
        return next(new ErrorHandler('Token can\'t Found',400))
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id);
    next();
})