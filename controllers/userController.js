let userController = {
    'register': function(req, res) {
        res.render('register');
    },
    'login': function(req, res) {
        res.render('login');
    },
    'list': function(req, res) {
        let users = [
            { id: 1, name: 'Dario'},
            { id: 2, name: 'Javier'},
            { id: 3, name: 'Maru'},
            { id: 4, name: 'Ale'},
            { id: 5, name: 'Alan'},
        ];
        res.render('usersList', {'users': users});
    }
};

module.exports = userController;