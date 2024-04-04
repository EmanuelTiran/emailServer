console.log("Hello World");
const 
express =require("express"),
app = express();

require("dotenv").config() // 
// process.env.MONGO_URI;
app.use(require('cors')());

app.use("/email",require('./routes/email.router'))
app.use("/user",require('./routes/user.router'))
app.use(express.json())
 
require("./DL/db").connect();

app.listen(5050, () => console.log("The server is runnig on port 5050..."));
