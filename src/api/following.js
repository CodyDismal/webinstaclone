const express = require('express');
const logic = require('../logic/following');
const loginRequired = require('../helpers/auth-middleware');
const router = express.Router();


router.post('/:userId', loginRequired, (req, res) => {
    return logic.followUser(req.params.userId, req, res);
});


router.get('/:userId', loginRequired, (req, res) => {
    return logic.isFollowingUser(req.params.userId, req, res);
});


module.exports = router;