const {
  create,
  read,
  readOne,
  update,
  del,
} = require("../../controllers/user.controller");
const User = require("../../models/user.model");

// const getEmailsUser = async (id, field, sort) => {
//     // const populate = {path: "chats.chat",populate: { path: "chat", options: { sort: { _id: -1 }, limit: 1 } }}
//   // const {emails} = await readOne({ _id: id}, field && { [field]: 1 } ,populate);
//   console.log("iiiiiiiiiiiiddddddddddd:");
//   let user = await readOne({ _id: id} );
//   console.log(user);
//   return user;
//   // const {chats} = await readOne({ _id: id}, field && { [field]: 1 } );
//   // console.log(chats);
//   // return chats.filter(emailObj => emailObj[sort] === true);
// };

const getEmailsUser = async (id) => {
  try {
    const user = await User.findById(id).populate({
      path: 'chats',
      populate: {
        path: 'chat',
        populate: {
          path: 'to',
          select: 'email'
        }
      },
      match: { 'isRead': false }
    });

    if (!user) {
      throw new Error('User not found');
    }

    // return user.chats.filter(chat => chat.isRead === false);

    const chats = user.chats.filter(chat => chat.isRead === false);
    chats.map(async (chat) => {
      chat.chat.msg.map(async (msg1) => {
        const nameSender = await getNameUser(msg1.from);
        msg1.nameSender = nameSender;
        
      })
    })
    
    return chats;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


const getNameUser = async (id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw new Error('User not found');
    }
    // console.log(user.fullName);
    return user.fullName;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};




module.exports = { getEmailsUser, getNameUser };