const { getConfig } = require('../knexConfig.js')
const clase = require('../APIs/ChatClassDB.js')

const messages = new clase(getConfig('mysql'),'messages')
messages.crearTabla()

const messagesController = {
  getAllMessages: function () {
    return messages.getAll()
  },
  saveMessage: function (message) {
    return messages.save(message)
  }
}

module.exports = messagesController