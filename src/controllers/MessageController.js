const Message = require('../models/Message');

class MessageController {
  async store(request, response) {
    try {
      const { user, message } = request.body;

      const userString = String(user).trim();

      if (
        userString === '' ||
        userString === undefined ||
        userString === null
      ) {
        return response.status(400).json({ error: 'User name ivalid' });
      }

      const NewMessage = await Message.create({
        user: userString,
        message,
      });

      request.io.emit('message', NewMessage);

      return response.status(201).json(message);
    } catch (error) {
      return response.status(500).json({ error: 'Error server' });
    }
  }
  async index(request, response) {
    try {
      const messages = await Message.find({}).sort('-createdAt');

      return response.status(200).json(messages);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Error server' });
    }
  }
}

module.exports = new MessageController();
