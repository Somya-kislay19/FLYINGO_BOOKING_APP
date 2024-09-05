const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const mongoose=require('mongoose');
import { users } from './routes/users.js';  // Adjust the path as per your file structure



//main().catch(err => console.log(err));

//async function main() {
  //await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  //console.log("Databse Connected");
//}

//const userSchema = new mongoose.Schema({
  //  username: String,
    //mail:String,
    //pwd:String
  //});
  //const User = mongoose.model('User', userSchema);

const server = express();
server.use(express.json());
server.use(cors());

server.use("/auth",userRouter);

//server.use(cors());
//server.use(bodyParser.json());
 mongoose.connect(
    "mongodb+srv://somukislay:mongoDBB@cluster0.onfyu.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0"
)

//server.post('/demo',  async (req, res) => {

//let user = new User();
//user.username =req.body.username;
//user.mail=req.body.mail;
//user.pwd=req.body.pwd;

//const doc=await user.save()


    /*console.log(doc);
    res.json(doc);
});

server.listen(8080, () => {
    console.log('Server started on port 8080');
});
*/

server.listen(8080,()=> console.log("Server Started"));

