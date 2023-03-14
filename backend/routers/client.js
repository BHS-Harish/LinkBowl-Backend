const express=require('express');
const router=express.Router();
const {addViews}=require('../controllers/clientController');

router.route('/updateviews').post(addViews);
module.exports=router;