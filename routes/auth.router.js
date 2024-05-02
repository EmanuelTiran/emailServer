const express = require('express');
const router = express.Router();
const User = require('../DL/models/user.model');
const serviceUser = require("../DL/BL/services/user.service");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
router.post('/register', async (req, res) => {
    try {
        const newUser = {
            fullName: `${req.body.firstName} ${req.body.lastName}`,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 2)
        };
        await serviceUser.createNewUser(newUser);
        console.log("router auth regitration:", newUser);
        res.send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('אירעה שגיאה');
    }
});
router.post('/login', async (req, res) => {
    try {
        const userFromDb = await User.findOne({ email: req.body.email }, "+password")
        console.log(userFromDb);
        console.log(userFromDb.password);
        if (!userFromDb) throw 'user not found';
        if (!bcrypt.compareSync(req.body.password, userFromDb.password)) throw 'not the same password';
        const token = jwt.sign({ _id: userFromDb._id }, secret, { expiresIn: '1h' })
        res.send({ fullName: userFromDb.fullName, email: userFromDb.email, token, avatar: userFromDb.avatar });
    } catch (error) {
        console.error(error);
        res.status(500).send('אירעה שגיאה');
    }
});


module.exports = router;
