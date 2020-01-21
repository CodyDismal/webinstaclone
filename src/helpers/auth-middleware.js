function loginRequired(req, res, next) {
    if (!req.session.userId) {
        res.cookie('loggedIn', 'false');
        res.cookie('loggedUserId', '');
        return res.status(401).send();
    }
    res.cookie('loggedIn', 'true');
    res.cookie('loggedUserId', req.session.userId);
    next();
}

module.exports = loginRequired;