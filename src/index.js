const express = require('express');
const authRouter = require('./api/auth');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const app = express();
app.use(cors());


const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static('public'));

app.use('/auth', authRouter);

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));