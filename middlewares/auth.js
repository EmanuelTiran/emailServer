
//this function called When the user wants to perform actions 
const SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const { getUser } = require('../DL/BL/services/user.service')
const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    try {
        // console.log(req.headers);
        let user = jwt.verify(token, SECRET);
        // const result = await getUser(user._id)
        // let user = { _id: "6617995b58378250e52cf22f", email: "eli@gmail.com" };
        req.user = user;
        next();

    } catch {
        res.sendStatus(401)
    }
}

module.exports = { auth };