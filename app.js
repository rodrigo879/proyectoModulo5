const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('*', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/404.html'))
})

app.listen(PORT, function(){
    console.log(`Server running at http://${HOST}:${PORT}/`);
})
