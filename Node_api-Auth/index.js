import express from 'express'
const app = express()
import dotenv from 'dotenv'
import db from './config/db.js'
import { CreateUser } from './routes/auth.js'
// import authRoute from './routes/auth.js'
// const postRoute = require('./routes/posts')
// const cookieParser = require('cookie-parser')
 

dotenv.config();



// mongoose.connect(
//     process.env.DB_CONNECT,
//     { useNewUrlParser: true },
//     () => console.log('db connection established'))
app.use('/api/login', CreateUser)
// app.use(express.json())
// app.use(cookieParser())
// app.use('/api/user', authRoute)
// app.use('/api/posts', postRoute)

app.listen(5000, ()=>console.log('aa'))