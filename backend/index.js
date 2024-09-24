import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


import cookieParser from 'cookie-parser'
import DbCon from './libs/db.js'
import AuthRoutes from './routes/Auth.js'
dotenv.config()
const PORT=process.env.PORT
const app=express()

DbCon()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  // Replace with your frontend URL
}));
app.use(cookieParser())
app.use(express.json())
app.use('/auth',AuthRoutes)


app.get('/',(req,res)=>{
    res.send('hello from backend')
})


app.listen(PORT,()=>{
    console.log(`App is ruuning on Port ${PORT}`)
})




