'use strict';

const
    express = require('express'),
    usersController = require('./users')

let router = express.Router();

router.use( usersController);

module.exports = router;