const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  user: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('message', MessageSchema); //Model usado nas mensagem, utilizando padrão do MongoDB
