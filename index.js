var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js')

// serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// Create user account
// app.get('/createaccount/create/:name/:email/:password', function (req,res){
//     res.send({
//         name:       req.params.name,
//         email:      req.params.email,
//         password:   req.params.password
//     });
// });
app.get('/createaccount/create/:name/:email/:password', function (req,res){
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});


// // Login user
// app.get('/account/login/:email/:password', function (req, res){
//     res.send({
//         email:      req.params.email,
//         password:   req.params.password
//     });
// });

// Return all accounts
app.get('/account/all', function (req, res){
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
    // res.send({
    //     name:       'abe',
    //     email:      'abe@j.eth',
    //     password:   'secret'
    // });
});

// add listener
var port = 5000;
app.listen(port);
console.log('Running on Port: ' + port);
