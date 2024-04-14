require('dotenv').config();
const mongoose = require('mongoose');
const db_uri = process.env.DB_URL;
mongoose
  .connect(db_uri)
  .then(() => {
    console.log('successfully connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database');
    console.log(error);
  });
