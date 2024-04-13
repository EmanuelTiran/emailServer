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
  let user = await userModel.findOne({ _id: userId, isActive: true }, 'chats');
  if (user) {
    await user.populate({
      path: 'chats.chat',
      match: { 'isFavorite': true },
      populate: {
        path: 'msg.from',
        model: 'user'
      }
    }).execPopulate();
  }
  return user.chats;
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



module.exports = { getInboxUser, getNameUser, getAvatarUser, getFavoriteUser, getReadUser, getSentUser };