const messageController = require('../../controllers/message.controller');
const userController = require('../../controllers/user.controller');
async function newMsg(content, from, to) {
    let message = {
        to: to,
        from: from,
        content: content,
    }
    if (validationEmails(to)) return (await messageController.create(message))._id;


};

async function validationEmails(emails) {
    const users = await userController.read();

    const validationResults = await Promise.all(emails.map(async email => {
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            console.log(`כתובת הדוא''ל ${email} תקינה`);
            return true;
        } else {
            console.log(`כתובת הדוא''ל ${email} אינה תקינה`);
            return false;
        }
    }));

    return validationResults;
};

module.exports = {createMessage,updateUser};
