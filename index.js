//require express
const express = require('express')
const app = express();

//require router
const userRouter = require('./routers/user_router')

//require database file
require('./models/database')

//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())

//Add Data API
app.use('/user',userRouter)


//Port Listner 
app.listen(3000,()=>{
    console.log(`server is start on ${3000}`);
})