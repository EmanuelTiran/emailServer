const express = require("express"),
    app = express();
// require("./DL/test_data").go()
require("dotenv").config() // 
app.use(require('cors')());
process.env.MONGO_URI;
app.use(express.json())

app.use("/email", require('./routes/email.router'))
app.use("/user", require('./routes/user.router'))
app.use("/auth", require('./routes/auth.router'))

require("./DL/db").connect();
// require('./DL/test_data').go()

app.listen(5050, () => console.log("The server is runnig on port 5050..."));
