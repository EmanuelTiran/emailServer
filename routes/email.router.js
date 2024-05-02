const express = require("express");
const router = express.Router();
const service = require("../DL/BL/services/chat.service");

const {auth} = require("../middlewares/auth");
router.use(express.json());

// Route to handle creating a new email
router.post('/', auth, async (req, res) => {
    console.log("post req.body:",req.body);
    const { subject, content, to, user } = req.body;
    res.send({
        _id:"gnbutkyhrifh,vjcbho",
        subject,
        content,
        to,
        user:user.email
        // from: user.email
    });
});


router.get('/:emailId',  async (req, res) => {
    console.log(req.params.emailId);
   try {
    const result = await service.getChatById(req.params.emailId)
    res.json(result)
  } catch (error) {
    console.log(error.message);
  }

});



module.exports = router;
