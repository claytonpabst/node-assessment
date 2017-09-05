var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;

var ctrl = require('./usersCtrl')

var app = express();

app.use(bodyParser.json());

app.get('/api/users', ctrl.getData)
app.get('/api/users/:id', ctrl.getUserById)
app.get('/api/admins', ctrl.getAdmins)
app.get('/api/nonadmins', ctrl.getNonAdmins)
app.get('/api/user_type/:usertype', ctrl.getUserType)
//set to take in a paramater
// app.get('/api/users/:id', ctrl.getAge)

app.listen(port, function() {
    console.log('Listening on port', port)
})

