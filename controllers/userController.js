const { validationResult } = require('express-validator');
const fs = require('fs')
const jsonTable = require('../database/jsonTable');

const usersModel = jsonTable('usuarios')

let userController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    logged: (req, res) => {
        let datosUsuario = {
            userName: req.body.userName,
            password: req.body.password,
            logged: false
        }

        let archivoUsuarios = fs.readFileSync('./database/usuarios.json', {encoding: 'utf-8'});
        let usuario = JSON.parse(archivoUsuarios)
        for(let i = 0; i < usuario.length; i++) {
            if(usuario[i].userName == datosUsuario.userName && usuario[i].password == datosUsuario.password) {
                datosUsuario.logged = true;
                console.log("Usuario Logeado")
                break;
            } else {
                console.log("No tuvo exito el login")
            }
        }
        res.redirect('/');       
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
        
            let usuario = {
                name: req.body.name,
                userName: req.body.userName,
                date: req.body.date,
                residence: req.body.residence,
                userProfile: req.body.userProfile,
                interests: req.body.interests,
                imageUser: req.body.imageUser,
                password: req.body.password,
                passwordConfirm: req.body.passwordConfirm,
                recorderUser: req.body.recorderUser,
            }

            let archivoUsuarios = fs.readFileSync('./database/usuarios.json', {encoding: 'utf-8'})
            let usuarios;
            
            if(archivoUsuarios == ""){
                usuarios = [];
            } else {
                usuarios = JSON.parse(archivoUsuarios);
            }
            
            usuarios.push(usuario);

            usuariosJSON = JSON.stringify(usuarios);
            
            fs.writeFileSync('./database/usuarios.json', usuariosJSON);


            res.send(usuario);
            res.redirect('/users/login');
        } else {
            res.render('register');
        }
    },
    'list': function(req, res) {
        let archivoJSON = fs.readFileSync('./database/usuarios.json', {encoding:'utf-8'});
        let users = JSON.parse(archivoJSON); 
        res.render('usersList', {'users': users});
    },
    search: function(req, res) {
        let loQueBuscoElUsuario = req.query.search;

        let archivoJSON = fs.readFileSync('./database/usuarios.json', {encoding:'utf-8'});
        let users = JSON.parse(archivoJSON);      
        let usersResult = [];

        for (let i = 0; i < users.length; i++) {
            if(users[i].name.includes(loQueBuscoElUsuario)){
                usersResult.push(users[i]);
            }
        }
        res.render('usersResult', {usersResult: usersResult})
    }
};

module.exports = userController;