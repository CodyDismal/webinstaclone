const logic = require('../logic/post');
const express = require('express');
const multer = require('multer');

const UPLOAD_PATH = __dirname + '/../public/uploads';
const upload = multer({dest: UPLOAD_PATH});


const router = express.Router();

router.put('/upload', upload.single('photo'), (req, res) => {
    if (req.file) {
        logic.handlePostUploading(req.file.filename, req.session.userId, req.body.description, req, res);
    } else throw 'error';
});


router.get('/image/:postId', function (req, res) {
    logic.getFileFromPost(req.params.postId, UPLOAD_PATH, req, res);
});

router.get('/:postId', function (req, res) {
    logic.getPostData(req.params.postId, req, res);
});

module.exports = router;