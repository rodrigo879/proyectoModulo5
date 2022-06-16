const express = require('express');
const path = require('path')
const app = express();

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

app.get('/productCart', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})

app.get('/contact', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/contact.html'))
})

// No Pertenece al proyecto, son pruebas.

app.get('/index', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/cart', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/cart.html'))
})

app.listen(3000, function(){
    console.log("Servidor corriendo en puerto 3000");
})