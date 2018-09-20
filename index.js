'use strict';

const
    server = require('./server')(),
    config = require('./configs');

server.create(config);
server.start();
/*
import express from 'express';
const mongoDbClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb://localhost:27017/'
const mongoOptions = { useNewUrlParser:true}

const api = express()

api.get('/user/:userId',(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    let userId = req.params.userId
    mongoDbClient.connect(mongoDbUrl,mongoOptions ,function(err,db){
        if (err) throw err;
        let dbo = db.db("resume-app");
        dbo.collection('Users').findOne({userId:userId}, function(err,result){
            if (err) throw err;
            res.send(result)
        })
        db.close();
    })
    
})

api.listen(3000, () => console.log(`api listening on port 3000`))*/