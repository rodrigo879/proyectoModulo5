const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('usuarios')

let products = [
    { id: 1, nombre: "Cafetera Moulinex", descuento: 40, precio: "6.770"},
    { id: 2, nombre: "Macbook Pro 2019", descuento: 20, precio: "230.000"},
    { id: 3, nombre: "Samsung Galaxy", descuento: 10, precio: "70.500"},
    { id: 4, nombre: "Smart TV Samsung", descuento: 5, precio: "23.200"},
];



let mainController = {
    home: (req, res) => {
        let user = req.session.usuarioLogueado;
        res.render('home',  {products: products, user:user});
    }
};

module.exports = mainController;