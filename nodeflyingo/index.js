const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users'); // Adjust this path as per your file structure

const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect(
    "mongodb+srv://somukislay:mongoDBB@cluster0.onfyu.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Database connection error:", err));

// Routes
server.use("/auth", userRouter); // Assuming 'userRouter' handles authentication routes

// Uncomment and adjust this part if you want to add this endpoint for user creation
/*
server.post('/demo', async (req, res) => {
    let user = new User({
        username: req.body.username,
        mail: req.body.mail,
        pwd: req.body.pwd
    });

    const doc = await user.save();
    console.log(doc);
    res.json(doc);
});
*/

server.listen(8080, () => {
    console.log('Server started on port 8080');
});
