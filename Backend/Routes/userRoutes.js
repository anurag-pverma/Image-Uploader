const { Router } = require("express");
const User = require("../Models/User");



const userRouter = Router();

userRouter.get('/:userId1', async(req, res)=>{
    const {userId} = req.params;
    const user = await User.findById(userId)
    if(user){
        res.send(user)
    }
    else{
        return res.status(401).send({message:"user not authonticate"})
    }
})


module.exports = userRouter;