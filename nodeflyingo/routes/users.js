/*import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

// Define a simple route to handle user requests
router.get('/', (req, res) => {
    res.send("User Router is working");
});

export { router as userRouter };*/





import express from 'express'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/User.js';


const router = express.Router()

router.post("/register" , async(req,res)=>{
    const{username,password} = req.body;
    const user = await UserModel.findOne({username: username});

    res.json(user);
    

});
router.post("/login");
















export {router as userRouter}

