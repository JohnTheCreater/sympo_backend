const express=require('express')

const mongoose=require('mongoose')
const cors=require("cors")

const app=express()
const rout=require('./router')

app.use(express.json())
app.use(cors())
app.use('/api',rout) //http://localhost:2718/api/

mongoose.connect('mongodb+srv://jo214841:0ZpivnAfAY3nGu9P@cluster0.tv57fgu.mongodb.net/bus').then(()=>{
    app.listen(2718)
    console.log('db connect')
})

