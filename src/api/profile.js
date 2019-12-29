const express = require('express');
const logic = require('../logic/profile');

const router = express.Router();

router.post('/data', (req, res) => {
    return logic.setProfileData(req.body, req, res);
});

router.get('/data/:userId', (req, res) => {
    return logic.getProfileData(req.params.userId, req, res);
});


module.exports = router;