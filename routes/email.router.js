const express = require("express");
const router = express.Router();
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

// // Route to handle deleting multiple emails by selection
// router.post('/deleteManyBySelect',  async (req, res) => {
//     // Implementation for deleting multiple emails
// });

// // Other routes...
// router.get('/',  async (req, res) => {
//     // Implementation for getting all emails
// });

// router.get('/:id',  async (req, res) => {
//     // Implementation for getting an email by ID
// });

// router.post('/:id',  async (req, res) => {
//     // Implementation for deleting an email by ID
// });

// router.get('/favorites',  async (req, res) => {
//     // Implementation for getting favorite emails
// });

module.exports = router;
