require('dotenv').config(); // Buscando a variavel de ambiente.

const mongoose = require('mongoose');
const URL = process.env.URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('conectado ao banco de dados com exito')); // conectando no banco de dado e exportando a comunicação.

module.exports = mongoose;
