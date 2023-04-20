const User=require('../model/userModel');
const updateClickandViews=async()=>{
    const date=new Date();
    if(date.getSeconds()==0&&date.getMinutes()==0&&date.getHours()==0){
        await User.updateMany({authenticated:true},{
            $push:{
                views:0
            }
        });
        await User.updateMany({authenticated:true},{
            $pop:{
                views:-1
            }
        });
        await User.updateMany({authenticated:true},{
            $push:{
                clicks:0
            }
        });
        
        await User.updateMany({authenticated:true},{
            $pop:{
                clicks:-1
            }
        });
    }
}
module.exports=updateClickandViews;