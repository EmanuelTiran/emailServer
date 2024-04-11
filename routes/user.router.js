const service = require("../DL/BL/services/user.service");

const express = require("express"),
  router = express.Router();

router.get("/inbox", async (req, res) => {
  try {

    const userId = "6617995b58378250e52cf22f"
    const result = await service.getInboxUser(userId);
    console.log(result);
    res.json(result)
    
  } catch (error) {
    console.log(error.message);
  }
});
// router.get("/favorite", async (req, res) => {
//   try {

//     const userId = "6613ca3fbc2cd76b285ef0c6"
//     const result = await service.getFavoriteUser(userId);
//     console.log(result);
//     res.json(result)
    
//   } catch (error) {
//     console.log(error.message);
//   }
// });
router.get("/sentemails", async (req, res) => {
  try {

    const userId = "6617995b58378250e52cf22f"
    const result = await service.getFavoriteUser(userId);
    console.log(result);
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

module.exports = router;