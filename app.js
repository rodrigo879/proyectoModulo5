const express = require('express');
const path = require('path')
const app = express();


app.use(express.static(path.resolve(__dirname,'./public')));

app.set('views engine', 'ejs');

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

app.listen(3000, function(){
    console.log("Servidor corriendo en puerto 3000");
})
