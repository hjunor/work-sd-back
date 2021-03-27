require('dotenv').config(); // Biblioteca de leitura de variaveis de ambiente.
require('./service/database'); // Execução da conecção do banco de dados.
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT; // Buscando a variavel de ambiente.
const app = express(); //Iniciando a aplicação.

const server = require('http').Server(app); //Utilizando a aplicação express dentro do server http.

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://sochat.netlify.app',
    methods: ['GET', 'POST'],
  },
}); // Abrindo intsnacia do socket com todos os parametros do express dentro do server.

app.use(cors()); //Utilizando cors na aplicação.
app.use(express.json()); //Utilizando o padrão json na aplicação.

app.use((req, res, next) => {
  req.io = io;
  return next();
}); // usando o socket dentro de todas as requisições.

app.use(require('./routes')); //Pegando o parametros das rotas.

server.listen(PORT, () => {
  console.log(':)Server started on port ' + PORT);
}); //escutando a aplicação na porta destinada.
