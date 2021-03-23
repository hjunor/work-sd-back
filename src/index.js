require('dotenv').config();
require('./service/database');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://sochat.netlify.app',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(require('./routes'));

server.listen(PORT, () => {
  console.log(':)Server started on port ' + PORT);
});
