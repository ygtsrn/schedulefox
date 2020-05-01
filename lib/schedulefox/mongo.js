'use strict';
const {MongoClient} = require('mongodb');
const debug = require('debug')('ScheduleFox:Mongo');

module.export = function(uri, collection, options){
    const self = this;

    let options = { 
            autoReconnect: true, 
            reconnectTries: Number.MAX_SAFE_INTEGER, 
            reconnectInterval: this._processEvery
        };


    MongoClient.connect(uri, options, (err, client) => {
        if(err){
            debug('Error Connecting To MongoDb!');
            return;
        }
        debug('Successful Connection To MongoDB => [%s]', collection);

    });


    // MongoClient.connect(url, function(err, client) {
    //     assert.equal(null, err);
    //     console.log("Connected successfully to server");
       
    //     const db = client.db(dbName);
       
    //     client.close();
    //   });

};