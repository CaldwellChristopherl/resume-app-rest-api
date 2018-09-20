'use strict';

const
    express = require('express'),
    userService = require('../../../model/users');

let router = express.Router();
let workHistoryRouter = express.Router({mergeParams:true});

router.use('/:userId/workhistory', workHistoryRouter);

router.get('/', userService.getUsers);
router.get('/:userId', userService.getUserWithId);

workHistoryRouter.get('/', userService.getUserHistory)


module.exports = router;