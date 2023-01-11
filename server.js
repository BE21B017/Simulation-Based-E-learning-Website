require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userroutes = require('./routes/users')
const app = express()
const mongdb = process.env.MongoURI
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST", "DELETE", "PATCH"],
}))

//express.json helps parse json files
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/user', userroutes)

mongoose.connect(mongdb)
.then((result) => app.listen(process.env.PORT))
.catch((err) => console.log(err))