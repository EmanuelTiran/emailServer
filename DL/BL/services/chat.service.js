const { create, read, readOne, update } = require("../../controllers/chat.controller");
const userModel = require("../../models/user.model");

const emailModel = require("../../models/chat.model");

async function getChatById(chatId) {
    try {
        // מחפשים את הצ'אט על פי ה-ID שלו
        const chat = await emailModel.findById(chatId).populate('members', 'fullName'); // מאחדים את פרטי המשתמשים בחברים של הצ'אט על פי השדה 'fullName'

        if (!chat) {
            // אם לא נמצא הצ'אט, מחזירים ערך ריק או null
            return null;
        }

        // מכין את האובייקט שיוחזר
        const result = {
            subject: chat.subject,
            messages: chat.msg // המערך של כל ההודעות בצ'אט
        };

        return result;
    } catch (error) {
        // אם יש שגיאה במהלך החיפוש, מחזירים null או מטפלים בה שוב
        console.error("Error getting chat by ID:", error);
        return null;
    }
}


async function createEmail(data) {
    let res = await create(data)
    console.log("new Email created:", res);
    return res;
}

async function readEmail(filter) {
    let res = await read(filter)
    console.log("recieve messages: ", res);
    return res;

}

async function readFirst(filter) {
    let res = await readOne(filter)
    console.log("recieve message: ", res);
}

async function updateEmail(id, data) {
    let res = await update(filter)
    console.log("recieve message: ", res);
}



module.exports = { createEmail, readEmail, readFirst, updateEmail ,getChatById};