require('dotenv').config();
require('./config/database');

const cors = require('cors');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 8080;

const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.use(authRoute);
app.use('/users', userRoute);

module.exports = app;
