const ErrorHandler=require('../utils/errorHandler');
const catchAsyncError=require('../middleware/catchAsyncError');
const User=require('../model/userModel');

//GET-api/v1/getUserDetails
exports.getUserDetails=catchAsyncError(async(req,res,next)=>{
    const {user}=req;
    res.status(201).json({
        success:true,
        user
    })
})
//PUT-api/v1/editUserLink
exports.editUserLink=catchAsyncError(async (req,res,next)=>{
    const {links}=req.body;
    const {user}=req;
    await User.findByIdAndUpdate(user.id,{links:links})
    const updatedUser=await User.findById(user.id);
    res.status(201).json({
        success:true,
        user:updatedUser
    })
})
//PUT-api/v1/editUserAvatar
exports.editUserAvatar=catchAsyncError(async (req,res,next)=>{
    const {avatar}=req.body;
    const {user}=req;
    await User.findByIdAndUpdate(user.id,{avatar:avatar});
    const updatedUser=await User.findById(user.id);
    res.status(201).json({
        success:true,
        user:updatedUser
    })
})
//PUT-api/v1/editUserName
exports.editUserName=catchAsyncError(async (req,res,next)=>{
    const{name}=req.body;
    const{user}=req;
    await User.findByIdAndUpdate(user.id,{name:name});
    const updatedUser=await User.findById(user.id);
    res.status(201).json({
        success:true,
        user:updatedUser
    })
})
//PUT-api/v1/editUserBio
exports.editUserBio=catchAsyncError(async (req,res,next)=>{
    const{bio}=req.body;
    const{user}=req;
    await User.findByIdAndUpdate(user.id,{bio:bio});
    const updatedUser=await User.findById(user.id);
    res.status(201).json({
        success:true,
        user:updatedUser
    })
})
//PUT-api/v1/editUserTheme
exports.editUserTheme=catchAsyncError(async (req,res,next)=>{
    const{theme}=req.body;
    const{user}=req;
    await User.findByIdAndUpdate(user.id,{theme:theme});
    const updatedUser=await User.findById(user.id);
    res.status(201).json({
        success:true,
        user:updatedUser
    })
})