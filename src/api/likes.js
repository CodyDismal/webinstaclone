const express = require('express');
const logic = require('../logic/likes');
const loginRequired = require('../helpers/auth-middleware');
const router = express.Router();

router.get('/post/:postId', loginRequired, (req, res) => {
    return logic.get(req, res);
});


module.exports = router;