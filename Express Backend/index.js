const express = require('express');
const mongoose =require('mongoose');
const todolist=require('./router/todo') 
const cors=require('cors')
const app =express()

app.use(express.json())

app.use(cors())

const url="mongodb://localhost:27017/Thissya"

mongoose.connect(url)

.then((_)=>{
        console.log("Connected successfully");
})
.catch((err)=>
{
    console.log(err.message);
})

app.use(todolist)

app.listen(3000,()=>{  
    console.log('Server is running on port 3000');
})
