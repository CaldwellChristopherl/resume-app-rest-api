'use strict';

const mongoDbClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb://localhost:27017/'
const mongoOptions = { useNewUrlParser:true}

function getUsers(req, res) {
    res.send("no data")
}

function getUserWithId (req, res){
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.18:4200');
    let userId = req.params.userId
    console.log(userId)
    mongoDbClient.connect(mongoDbUrl,mongoOptions ,function(err,db){
        if (err) throw err;
        let dbo = db.db("resume-app");
        dbo.collection('Users').findOne({userId:userId}, function(err,result){
            if (err) throw err;
            res.send(result)
        })
        db.close();
    })
}

function getUserHistory(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.18:4200');
    let userId = req.params.userId
    console.log(userId)
    mongoDbClient.connect(mongoDbUrl,mongoOptions ,function(err,db){
        if (err) throw err;
        let dbo = db.db("resume-app");
        dbo.collection('WorkHistory').find({userId:userId}).sort({"endDate":1}).toArray(function(err,result){
            if (err) throw err;
            res.send(result)
        })
        db.close();
    })
}

module.exports = {
    getUsers: getUsers,
    getUserWithId: getUserWithId,
    getUserHistory: getUserHistory
};