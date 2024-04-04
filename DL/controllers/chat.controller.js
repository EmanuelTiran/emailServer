const emailModel = require("../models/chat.model");

// CRUD

async function create(data) {
    
    return await emailModel.create(data)
}

async function read(filter) {
    return await emailModel.find(filter)
}

async function readOne(filter) {
    return await emailModel.findOne(filter)
}

async function update(id, data) {
    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}


module.exports = { create, read, readOne, update }







