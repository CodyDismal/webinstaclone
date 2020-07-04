const fs = require('fs');
const path = require('path');

const models = require('../models');

module.exports = {
    handlePostUploading(filename, userId, description, req, res) {
        let post;
        return models.Post.create({
            fileName: filename,
            description: description,
            UserId: userId
        })
            .then(_post => {
                post = _post;
                return models.Like.create({
                    PostId: post.id,
                    UserId: userId,
                    count: 0,
                });
            })
            .then(() => res.send({ newPostId: post.id }))
    },

    getFileFromPost(postId, UPLOAD_PATH, req, res) {
        return models.Post.findOne({
            where: {
                fileName: postId
            }
        }).then(post => {
            if (post) {
                const filePath = path.join(UPLOAD_PATH, post.fileName);
                if (fs.existsSync(filePath)) {
                    fs.createReadStream(filePath).pipe(res);
                    return;
                }
            }
            return res.status(404).send();
        }).catch((err) => {
            return res.status(500).send("File not found at server");
        })
    },

    getPostData(postId, req, res) {
        models.Post.findOne({
            where: {
                id: postId
            },
            attributes: ['description'],
            include: [
                {
                    model: models.Comment
                },
                {
                    model: models.Like
                }
            ]
        }).then(post => {
            if (post) {
                res.send(post);
            }
            res.status(404);
            return res.send();
        });
    }
};