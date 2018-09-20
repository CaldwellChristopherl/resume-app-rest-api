'use strict';

const
    express = require('express'),
    usersController = require('../../controller/apis/users');

let router = express.Router();

router.use('/user', usersController);

module.exports = router;