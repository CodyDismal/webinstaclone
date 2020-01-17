const express = require('express');
const logic = require('../logic/profile');
const loginRequired = require('../helpers/auth-middleware');
const router = express.Router();

router.post('/data', loginRequired, (req, res) => {
    return logic.setProfileData(req.body, req, res);
});

router.get('/data/:userId', loginRequired, (req, res) => {
    return logic.getProfileData(req.params.userId, req, res);
});


module.exports = router;