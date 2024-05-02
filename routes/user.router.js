const service = require("../DL/BL/services/user.service");

const express = require("express"),
  router = express.Router();

const { auth } = require("../middlewares/auth")

router.get("/inbox", auth, async (req, res) => {
  try {
    console.log(req.headers.user._id);
    // const userId = "6617995c58378250e52cf23a"
    const userId = req.headers.user._id
    const result = await service.getInboxUser(userId);
    // console.log(result);
    res.json(result)

  } catch (error) {
    console.log(error.message);
  }
});

router.get("/sentemails", async (req, res) => {
  try {

    const userId = "6617995c58378250e52cf23a"
    const result = await service.getSentUser(userId);
    res.json(result)

  } catch (error) {
    console.log(error.message);
  }
});
router.get("/favorite", async (req, res) => {
  try {

    const userId = "6617995c58378250e52cf23a"
    const result = await service.getFavoriteUser(userId);
    res.json(result)

  } catch (error) {
    console.log(error.message);
  }
});

router.get("/name/:userId", async (req, res) => {
  const result = await service.getNameUser(req.params.userId);
  // console.log(result);
  res.send(result);
});

router.get("/avatar/:userId", async (req, res) => {
  const result = await service.getAvatarUser(req.params.userId);
  // console.log(result);
  res.send(result);
});

// router.get("/sent", async (req, res) => {
//   const result = await getEmailsUser(req.headers.user._id, "emails","isSent");
//   res.send(result);
// });

router.put("/:id", async (req, res) => { });

router.delete("/:id", async (req, res) => { });

router.get('/', auth, async (req, res) => {
  try {
    if (req.user) {
      res.send(req.user)
    } else {
      throw "USER ISN'T EXIST"
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('אירעה שגיאה');
  }
});

module.exports = router;