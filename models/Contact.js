const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true,
    unique: true
  }
},
  {
    collection: 'contacts'
  })

module.exports = mongoose.model('Contact', ContactSchema)