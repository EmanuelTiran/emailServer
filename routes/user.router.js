const { getEmailsUser, getNameUser } = require("../DL/BL/services/user.service");

const express = require("express"),
  router = express.Router();

router.post("/", async (req, res) => { });

router.get("/inbox", async (req, res) => {
  const result = await getEmailsUser('660ea8b9d501e520989040b1', "chats", "isRecieved");
  // console.log(req.headers.user._id);
  res.send(result);
});
router.get("/name/:userId", async (req, res) => {
  const result = await getNameUser(req.params.userId);
console.log(result);
  res.send(result);
});

// router.get("/sent", async (req, res) => {
//   const result = await getEmailsUser(req.headers.user._id, "emails","isSent");
//   res.send(result);
// });

router.put("/:id", async (req, res) => { });

router.delete("/:id", async (req, res) => { });

module.exports = router;