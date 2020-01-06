const express = require('express');
const logic = require('../logic/feed');

const router = express.Router();

router.get('/', (req, res) => {
    return logic.getFeed(req, res);
});


module.exports = router;