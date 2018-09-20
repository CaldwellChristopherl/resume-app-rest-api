'use strict';

const
    express = require('express'),
    errorController = require('../controller/error');

let router = express.Router();

router.get('/', errorController.index);

module.exports = router;