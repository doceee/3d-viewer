const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose
  .connect(
    `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@0.0.0.0:27017/`,
    {
      autoIndex: true,
      autoCreate: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('DB connection established successfully.');
  })
  .catch((err) => {
    console.log(err);
  });

require('./routes/models')(app);

app.use(function (error, req, res, next) {
  console.error(error);

  return res.status(500).send({ error });
});

app.listen(process.env.PORT, () => {
  console.info(`Server running on port: ${process.env.PORT}`);
});
