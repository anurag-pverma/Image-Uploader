const express  = require('express');
const  connection  = require('./Database/db.js');
const authRouter = require('./Routes/authRoutes.js');
const userRouter = require('./Routes/userRoutes.js');
var cors = require('cors')

const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:[`http://localhost:3000`]
}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.use('auth', authRouter)
app.use('profile', userRouter)

app.listen(PORT, async()=>{
    await (connection)
    console.log("DATABASE IS CONNECTED")
    console.log(`SERVER IS RUNNING `)
})