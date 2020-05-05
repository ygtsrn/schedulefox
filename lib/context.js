'use strict';
module.exports = function(uri){
    const Mongo = this.Mongo;
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
        // ,autoIndex: false, // Don't build indexes
        // poolSize: 10, // Maintain up to 10 socket connections
        // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        // family: 4 // Use IPv4, skip trying IPv6
      };
    Mongo.connect(uri, options).then(x => { 
        console.log("Mongo DB Connected...");
        return;
    },err => { console.error(err) });
}