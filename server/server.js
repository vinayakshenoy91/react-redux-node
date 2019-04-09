const express = require('express');


const app = express();

app.get('/api/getData', (req,res)=>{
    res.send('Hi, I am from server');
})


app.listen(3000, ()=>{
    console.log("Listening....")
});
