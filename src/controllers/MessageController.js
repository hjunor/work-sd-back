const Message = require('../models/Message');

class MessageController {
  async store(request, response) {
    //Methodo para salvar nova mensagem.
    try {
      const { user, message } = request.body; // Corpo da requisição.

      const userString = String(user).trim(); //Tirando espaçamentos.

      if (
        userString === '' ||
        userString === undefined ||
        userString === null
      ) {
        return response.status(400).json({ error: 'User name ivalid' });
      } //Validando nome de usuário.

      const NewMessage = await Message.create({
        user: userString,
        message,
      }); // Salvando no banco.

      request.io.emit('message', NewMessage); //Emitindo mudanças dentro de todo escopo do server.

      return response.status(201).json(message);
    } catch (error) {
      return response.status(500).json({ error: 'Error server' }); //Tratamento de erro.
    }
  }
  async index(request, response) {
    //Methodo para buscar nova mensagem
    try {
      const messages = await Message.find({}).sort('-createdAt'); //busta todas as mensagens.

      return response.status(200).json(messages);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Error server' }); //tratamento de erro.
    }
  }
}

module.exports = new MessageController();
