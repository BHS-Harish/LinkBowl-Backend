const User=require('../model/userModel');
const deleteUnVerfiedRecord=async()=>{
    await User.deleteMany({validateTokenExpire:{
        $lt:Date.now()
    }})
}
module.exports=deleteUnVerfiedRecord;