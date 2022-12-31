const { Router } = require("express");
const User = require("../Models/User");


const authRouter = Router();
authRouter.post('/signup', (req, res)=>{
    const user = User(req.body);
    user.save((err, success)=>{
        if(err){
            res.status(500).send({message: "error occured"})
        }
        return res.status(201).send({message:'Signup Succesfull', user: success['_doc']});
    })
})

authRouter.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    const validUser  = await User.find({username, password})
    if(validUser.length <1){
        res.status(401).send({message:'Invalid Credentials'})
    }
    return res.send(validUser)
})


module.exports = authRouter;