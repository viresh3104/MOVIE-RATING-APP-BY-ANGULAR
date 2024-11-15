var express = require('express');
var registerController = require('../src/Register/registerController');


const router = express.Router(); 
router.route('/movie/login').post(registerController.registerUserControllerFn);


module.exports = router; 