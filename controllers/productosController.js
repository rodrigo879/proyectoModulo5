let productosController = {
    listado: function(req, res){
        res.send("Listado de productos");
    },
    crear: function() {},
    detalle: function(req, res) {
        res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
    },
    detalleComentario: function(req, res) {
        if(req.params.idComentario == undefined) {
            res.send("Bienvenidos a los comentarios del producto" + req.params.idProducto);
        } else {
            res.send("Bienvenidos a los comentarios del producto" + req.params.idProducto + "y estas enfocado en el comentario " + req.params.idComentario);
        }
    },
    list: function(req, res) {
        let products = [
            { id: 1, nombre: "Cafetera Moulinex", descuento: 40, precio: 6770},
            { id: 2, nombre: "Macbook Pro 2019", descuento: 20, precio: 230000},
            { id: 3, nombre: "Samsung Galaxy", descuento: 10, precio: 70500},
            { id: 4, nombre: "Smart TV Samsung", descuento: 5, precio: 23200},
        ];
        res.render('productsList', {'products': products});
    },
};

module.exports = productosController;