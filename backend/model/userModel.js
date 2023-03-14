const mongoose = require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const crypto=require('crypto');
const jwt=require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        maxlength: [20, "Username can't exceed 20 characters"],
        required: [true, "Username field was must"]
    },
    name: {
        type: String,
        required: true,
        maxlength: [20, "Name can't exceed 20 characters"]
    },
    bio: {
        type:String,
        maxlength:[100,"Bio can't exceed 100 characters"],
        default:" "
    },
    avatar: String,
    email: {
        type: String,
        required: [true, "Please enter email Address"],
        unique: true,
        validate: [validator.isEmail, "Please enter validate Email address"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [8, "Password can't be less than  8 character"],
        select: false
    },
    role:{
		type:String,
		default:"user"
	},
	links:[
		{
			title:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
            private:{
                type:Boolean,
                required:true
            }
		}
	],
    views:[
        {
            date:{
                type:String,
                required:true
            },
            count:{
                type:Number,
                required:true,
                default:0
            }
        }
    ],
    click:[
        {
            date:{
                type:String,
                required:true
            },
            count:{
                type:Number,
                required:true,
                default:0
            }
        }
    ],
    theme:{
		bgColor:{
			type:String,
			default:"#000AFF",
			uppercase:true
		},
		btnBgColor:{
			type:String,
			default:"#FFFFFF",
			uppercase:true
		},
		btnColor:{
			type:String,
			default:"#000AFF",
			uppercase:true
		},
		btnShadowColor:{
			type:String,
			default:"#000000",
			uppercase:true
		},
		color:{
			type:String,
			default:"#FFFFFF",
			uppercase:true
		},
	},
    authenticated:{
        type:Boolean,
        default:false
    },
	validateToken:String,
	validateTokenExpire:Date,
	createdAt:{
		type:Date,
		default:Date.now()
	}
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
        next();
    this.password=await bcrypt.hash(this.password,10);
    
})
userSchema.methods.getValidateToken=function(){
    const token=crypto.randomBytes(20).toString('hex');
    this.validateToken=crypto.createHash('sha256').update(token).digest('hex');
    this.validateTokenExpire=Date.now()+30*24*60*60*1000;
    return token;
}
userSchema.methods.isValidPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE_TIME
    });
}
let model = mongoose.model('user', userSchema);
module.exports = model;