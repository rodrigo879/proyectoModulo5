const { validationResult } = require('express-validator');
const jsonTable = require('../database/jsonTable');

const usersModel = jsonTable('usuarios')

let userController = {
    login: (req, res) => {
        res.render('login');
    },
    create: (req, res) => {
        res.render('register');
    },
    store: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            if(req.file) {
                let user = req.body;
                user.admin = false;
                user.image = req.file.filename;
                userId = usersModel.create(user);
                console.log('Usuario Creado')
                res.render('login');
            } else {
                console.log('No cargo imagen')
                res.render('register');
            }
        } else {
            console.log('Debe ingresar datos')
            console.log(errors.mapped())
            res.render('register', {errors : errors.mapped(), oldData: req.body});
        }
    },
    logged: (req, res) => {
        let errors = validationResult(req);
        let usuarioALoguearse;
        if(errors.isEmpty()) {
            let user = req.body
            let usuario = usersModel.readFile();
            for(let i = 0; i < usuario.length; i++) {
                if(usuario[i].userName == user.userName && usuario[i].password == user.password) {
                    usuarioALoguearse = usuario[i];
                    console.log("Usuario Logeado")
                    break;
                } else {
                    console.log("No tuvo exito el login")
                    return res.render('login', {errors : [
                        {msg: 'Credenciales Invalidadas'}
                    ]});
                }
            }
            req.session.usuarioLogueado = usuarioALoguearse;
            res.redirect('/');   
        } else {
            res.render('login', {errors: errors.errors});
        }    
    },
    'list': (req, res) => {
        let users = usersModel.readFile();
        let user = req.session.usuarioLogueado;
        res.render('usersList', {users, user});
    },
    search: (req, res) => {
        let loQueBuscoElUsuario = req.query.search;
        let user = usersModel.readFile();     
        let usersResult = [];

        for (let i = 0; i < user.length; i++) {
            if(user[i].name.includes(loQueBuscoElUsuario)){
                usersResult.push(user[i]);
            }
        }
        res.render('usersResult', {usersResult: usersResult})
    }
};

module.exports = userController;