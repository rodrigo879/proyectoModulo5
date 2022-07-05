const express = require('express');
const methodOverride = require('method-override')
const session = require('express-session')
const path = require('path')
const app = express();
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');
const rutasMain = require('./routes/main');
const logMiddleware = require('./middelwares/logMiddlewares');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// Permite Capturar la informacion enviada mediante POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Permite sobreescribir el metodo POST utilizando PUT y DELETE
app.use(methodOverride('_method'));

// Middelware a nivel global
app.use(logMiddleware);

// Permite mantener una sesion en todas las paginas durante el uso del navegador abierto
app.use(session({secret: 'Secreto', resave: true, saveUninitialized: true}))

// Rutas
app.use('/', rutasMain);
app.use('/users', rutasUsers);
app.use('/productos', rutasProductos);

app.use((req,res,next) => {res.status(404).render('notFound')});

app.listen(PORT, function(){
    console.log(`Server running at http://${HOST}:${PORT}/`);
})