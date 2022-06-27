const path = require('path');

let mainController = {
    home: (req, res) => {
        let products = [
            { id: 1, nombre: "Cafetera Moulinex", descuento: 40, precio: "6.770"},
            { id: 2, nombre: "Macbook Pro 2019", descuento: 20, precio: "230.000"},
            { id: 3, nombre: "Samsung Galaxy", descuento: 10, precio: "70.500"},
            { id: 4, nombre: "Smart TV Samsung", descuento: 5, precio: "23.200"},
        ];
        res.render('home',  {'products': products});
    },
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    },
    notFound: (req,res) => {
        res.render('404');
    },
};

module.exports = mainController;