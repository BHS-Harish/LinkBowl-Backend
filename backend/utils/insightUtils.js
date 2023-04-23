const User=require('../model/userModel');
const updateClickandViews=async()=>{
    const date=new Date();
    if(date.getUTCSeconds()==0&&date.getUTCMinutes()==0&&date.getUTCHours()==0){
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