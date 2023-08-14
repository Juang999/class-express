var express = require('express');
var router = express.Router();
const {UserController} = require('../app/controller/Controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/membership', UserController.getMembershipUser)

module.exports = router;
