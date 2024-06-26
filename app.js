require('dotenv').config();
require('./config/database');

const cors = require('cors');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 8080;

const carRoute = require('./routes/carRoute');
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes');
const chatRoute = require('./routes/chatRoutes');
const messageRoute = require('./routes/messageRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const transactionRoute = require('./routes/transactionRoute');

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

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.use(authRoute);
app.use('/cars', carRoute);
app.use('/chats', chatRoute);
app.use('/users', userRoute);
app.use('/messages', messageRoute);
app.use('/categories', categoryRoute);
app.use('/transactions', transactionRoute);

module.exports = app;
