const { create, read, readOne, update, del } = require('./controllers/user.controller')

async function go() {
    require('dotenv').config()
    await require('./db').connect()

    let user = {
        email: "eli@gmail.com",
        fullName: "Ahron Cohen",
        password: "123qwe",
        avatar: "http://",
        emails: [],
    }

    let res = await create(user)
    console.log("###############################################");
    console.log(res);
    console.log("###############################################");

}

go()