const express = require('express');
const logic = require('../logic/feed');
const loginRequired = require('../helpers/auth-middleware');
const router = express.Router();

router.get('/', loginRequired, (req, res) => {
    return logic.getFeed(req, res);
});


module.exports = router;