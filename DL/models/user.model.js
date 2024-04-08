const mongoose = require("mongoose");

//This code defines the form of the collection
//in the database and actually creates it
//call this code from another file to create the schma

//Creating legitimacy for the schema
const userSchema = new mongoose.Schema({
  email: {
      type: String,
      unique: true,
      required: true
  },
  fullName: {
      type: String,
      required: true
  },
  password: {
      type: String,
      select: false
  },
  avatar: String,

  chats: [{
      chat: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'chat'
      },
      isSent: Boolean,
      isRecieved: Boolean,
      isFavorite: Boolean,
      isDeleted: Boolean,
      isDraft: Boolean,
      isRead: { type: Boolean, default: false },
      labels: [String]
  }],

  isActive: {
      type: Boolean,
      default: true
  }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
