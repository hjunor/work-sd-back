require('dotenv').config();

const mongoose = require('mongoose');
const URL = process.env.URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('conectado ao banco de dados com exito'));

module.exports = mongoose;
