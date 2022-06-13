const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/login.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/cart.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/cart.html'))
})

app.get('/productCart.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})

app.get('/contact.html', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/contact.html'))
})

app.listen(3000, function(){
    console.log("Servidor corriendo en puerto 3000");
})