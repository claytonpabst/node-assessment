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
        console.log(req.params)
    }











}