let userController = {
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    },
    create: (req, res) => {
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
        res.send(usuario);
        // res.redirect('/users/list');
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