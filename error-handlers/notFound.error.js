const CustomError = require('./custom.error')

module.exports = class NotFoundError extends CustomError {
  constructor(message) {
    super(404, message || 'Not Found')
  }
}