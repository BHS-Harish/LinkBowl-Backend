const catchAsyncError=require('../middleware/catchAsyncError');
const User=require('../model/userModel');
const date=require('date-and-time');
exports.addViews=catchAsyncError((req,res,next)=>{
    const {id}=req.body;
    const now=new Date();
    const result=date.format(date.addDays(now,-1),'DD MMM');

    res.status(201).json({
        success:true,
        result
    })
})