const {
    create,
    read,
    readOne,
    update,
    del,
  } = require("../../controllers/user.controller");
  
  const getEmailsUser = async (id, field, sort) => {
      const populate = {path: "emails.email",populate: { path: "msg", options: { sort: { _id: -1 }, limit: 1 } }}
    const {emails} = await readOne({ _id: id}, field && { [field]: 1 } ,populate);
    return emails.filter(emailObj => emailObj[sort] === true);
  };
  
    
  module.exports = { getEmailsUser };