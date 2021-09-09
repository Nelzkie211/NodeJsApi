const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Import routes
const authRoute = require('./route/auth')

dotenv.config()

//connect db
mongoose.connect(process.env.DB_CONNECT,() => console.log('connect to db!'))




//middleware
app.use(express.json())

//routes middleware
app.use('/api/user', authRoute)


app.listen(3000, () => console.log('servers running'))