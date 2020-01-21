const express = require('express');
const logic = require('../logic/likes');
const loginRequired = require('../helpers/auth-middleware');
const router = express.Router();


router.put('/:postId', loginRequired, (req, res) => {
    return logic.put(req.params.postId, req, res);
});


module.exports = router;