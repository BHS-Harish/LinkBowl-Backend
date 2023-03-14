const express=require('express');
const{registerUser, checkUserName, checkEmailId, verifyEmail,loginUser, checkLoggedInOrNot, logoutUser, deleteAccount, getUser}=require('../controllers/authController');
const {isAuthenticated} =require('../middleware/authenticate');
const router=express.Router();

router.route('/register').post(registerUser);
router.route('/checkUserName').post(checkUserName);
router.route('/checkEmailId').post(checkEmailId);
router.route('/auth').post(verifyEmail);
router.route('/login').post(loginUser);
router.route('/checkLoggedInOrNot').get(checkLoggedInOrNot);
router.route('/logout').get(logoutUser)
router.route('/deleteaccount').get(isAuthenticated,deleteAccount);

router.route('/user').post(getUser);

module.exports=router;