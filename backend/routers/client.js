const express=require('express');
const router=express.Router();
const {addViews, addClicks,reportPage}=require('../controllers/clientController');

router.route('/updateviews').put(addViews);
router.route('/updateclicks').put(addClicks);
router.route('/report').post(reportPage);

module.exports=router;