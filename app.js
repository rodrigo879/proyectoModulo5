const express = require('express');
const methodOverride = require('method-override')
const app = express();
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');
const rutasMain = require('./routes/main');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/productos', rutasProductos);
app.use('/users', rutasUsers);
app.use('/', rutasMain);

app.use((req,res,next) => {res.status(404).render('notFound')});

app.listen(PORT, function(){
    console.log(`Server running at http://${HOST}:${PORT}/`);
})