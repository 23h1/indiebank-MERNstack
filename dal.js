// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// let db = null;

// // Connect to Mongo
// MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
//     console.log('Connected!');

//     // database name
//     const dbNAme = 'myproject';
//     const db = client.db(dbNAme);
// });

// // create user account
// function create(name, email, password){
//     return new Promise((resolve, reject) => {
//         const collection = db.collection('users');
//         const doc = {name, email, password, balance: 0};
//         collection.insertOne(doc, {w:1}, function(err,result){
//             err ? reject(err) : resolve(doc);
//         });
//     });
// };

// // return all users. The calling function will be in the Express app.
// function all(){
//     return new Promise((resolve, reject) => {
//         const customers = db
//                         .collection('users')
//                         .find({})
//                         .toArray(function(err, docs) {
//                             err ? reject(err) : resolve(docs);
//                         });
//     });
// };

// module.exports = {create, all};

const MongoClient =require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
    console.log('Connected successfully to the MongoDB instance !');

    // connect to the required db
    db = client.db('fullStackTrialDB');
});

// create user account
function create(name, email, password){
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result){
            err ? reject(err) : resolve(doc);
        });
    });
};

//all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs){
                err ? reject(err) : resolve(docs);
            });
    });
};

module.exports = {create, all};