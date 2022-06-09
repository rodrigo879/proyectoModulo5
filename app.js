const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/login.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/cart.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/cart.html'))
})

app.listen(3000, function(){
    console.log("Servidor corriendo en puerto 3000");
})