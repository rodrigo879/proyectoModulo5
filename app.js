const express = require('express');
const app = express();
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');
const rutasMain = require('./routes/main');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/productos', rutasProductos);
app.use('/users', rutasUsers);
app.use('/', rutasMain);

app.listen(PORT, function(){
    console.log(`Server running at http://${HOST}:${PORT}/`);
})
