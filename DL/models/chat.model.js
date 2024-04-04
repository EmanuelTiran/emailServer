const mongoose = require("mongoose");
require("./user.model");

//This code defines the form of the collection
//in the database and actually creates it
//call this code from another file to create the schma

const messageSchema = new mongoose.Schema({
    from: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'user',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
})

//Creating legitimacy for the schema
const chatSchema = new mongoose.Schema({
    subject: {
        type: String,
    },

    msg: {
        type: [messageSchema],
        required: true
    },
    
    to: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
    }],
    
    lastDate: {
        type: Date,
        default: Date
    },

});


const chatModel = mongoose.model('chat', chatSchema)

module.exports = chatModel;