const {
  create,
  read,
  readOne,
  update,
  del,
} = require("../../controllers/user.controller");
const userModel = require("../../models/user.model");

async function getInboxUser(userId) {
  try {
    const user = await readOne({ _id: userId }, "", { chats: true, users: true })
    if (!user) return ["not found"]

    return user;
  } catch (error) {
    console.error('Error in getInboxUser:', error);
    // throw error;
  }
}
async function getFavoriteUser(userId) {
  let user = await userModel.findOne({ _id:userId, isActive: true }, '',{ chats: true, users: true })
  if (user) {
    populate.chats && await user.populate("chats.chat");
    populate.users && await user.populate("chats.chat.msg.from")
  }
  return user.toObject();
}


const getNameUser = async (id) => {
  try {
    const user = await userModel.findById(id);

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

const getAvatarUser = async (id) => {
  try {
    const user = await userModel.findById(id);

    if (!user) {
      throw new Error('User not found');
    }
    // console.log(user.fullName);
    return user.avatar;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};



module.exports = { getInboxUser, getNameUser, getAvatarUser, getFavoriteUser };