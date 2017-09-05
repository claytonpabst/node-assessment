var userData = require('./userData.json');

module.exports = {

    getData: function(req, res) {
        console.log(req.query)
        info = []
        if (req.query.age) {
            info = userData.filter(userData => userData.age<req.query.age)
            res.status(200).send(info)
            return
        } else if (req.query.lastname) {
            info= userData.filter(userData => userData.last_name === req.query.lastname)
            res.status(200).send(info)
            return
        } else if (req.query.email) {
            info = userData.filter(userData => userData.email === req.query.email)
            res.status(200).send(info)
            return
        } else if (req.query.favorites) {
            for (let i = 0; i < userData.length; i++) {
                if(userData[i].favorites.indexOf(req.query.favorites) !== -1) {
                info.push(userData[i])
                }
            }
            res.status(200).send(info)
            return
        } else {
            res.status(200).send(userData);
        }
    },

    getUserById: function(req, res) {
        console.log(req.params.id)
        let user = {}
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id == req.params.id) {
                user = userData[i]
                res.status(200).send(user)
                return
            } 
        }
        res.status(404).json(null)
    },

    getAdmins: function(req, res) {
        admins = userData.filter(userData => userData.type === 'admin')
        res.status(200).send(admins)
    },

    getNonAdmins: function(req, res) {
        nonAdmins = userData.filter(userData => userData.type !== 'admin')
        res.status(200).send(nonAdmins)
    },

    getUserType: function(req, res) {
        console.log(req.params)
        let info = userData.filter(userData => userData.type === req.params.usertype)
        res.status(200).send(info);
    },

    











}