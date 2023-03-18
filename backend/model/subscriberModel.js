const mongoose = require('mongoose');
const validator=require('validator');
const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter email Address"],
        unique: true,
        validate: [validator.isEmail, "Please enter validate Email address"]
    },
	createdAt:{
		type:Date,
		default:Date.now()
	}
})
let model = mongoose.model('subscriber', subscriberSchema);
module.exports = model;