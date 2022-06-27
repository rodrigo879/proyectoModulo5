let userController = {
    'registro': function(req, res) {
        res.render('register');
    },
    'logearse': function(req, res) {
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
    },
    search: function(req, res) {
        let loQueBuscoElUsuario = req.query.search;
        let users = [
            { id: 1, name: 'Dario'},
            { id: 2, name: 'Javier'},
            { id: 3, name: 'Maru'},
            { id: 4, name: 'Ale'},
            { id: 5, name: 'Alan'},
        ];

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