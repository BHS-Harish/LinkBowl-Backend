const catchAsyncError=require('../middleware/catchAsyncError');
const User=require('../model/userModel');
const Cryptr=require('cryptr');
const ErrorHandler = require('../utils/errorHandler');
const cryptr=new Cryptr("b1a8l1a0h2a0r0i3sankar");
//PUT-api/v1/updateviews
exports.addViews=catchAsyncError(async(req,res,next)=>{
    const {id}=req.body;
    const orginalId=cryptr.decrypt(id);
    const user=await User.findById(orginalId);
    let {totalViews,views}=user;
    const newViews=views.splice(6,1,(views[6]+1));
    totalViews+=1;
    await User.findByIdAndUpdate(orginalId,{views:views,totalViews:totalViews});
    const newUser=await User.findById(orginalId);
    res.status(201).json({
        success:true,
    })
});
//PUT-api/v1/updateclicks
exports.addClicks=catchAsyncError(async(req,res,next)=>{
    const {id}=req.body;
    const orginalId=cryptr.decrypt(id);
    const user=await User.findById(orginalId);
    let {totalClicks,clicks}=user;
    const newClicks=clicks.splice(6,1,(clicks[6]+1));
    totalClicks+=1;
    await User.findByIdAndUpdate(orginalId,{clicks:clicks,totalClicks:totalClicks});
    const newUser=await User.findById(orginalId);
    res.status(201).json({
        success:true,
    })
});
//POST-api/v1/report
exports.reportPage=catchAsyncError(async(req,res,next)=>{
    const {id,name}=req.body;
    const orginalId=cryptr.decrypt(id);
    if(!name)
        return next(new ErrorHandler("Please select report type",500));
    await User.findByIdAndUpdate(orginalId,{
        $push:{
            report:{
                name:name
            }
        }
    });
    res.status(201).json({
        success:true,
    })
})