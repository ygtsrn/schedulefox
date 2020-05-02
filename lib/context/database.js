const mongoose = require('mongoose');

module.exports = function(uri){
    const self = this;

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
      
    mongoose.connect(uri, options).then(x => { 
        console.log("Mongo DB Connected => ");
        // console.log(x.connections);
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        self.db = x;
        return;
    },err => { console.error(err) });

    const JobsSchema = new mongoose.Schema({
        JobName: { type: String, unique: true, required: true },
        Block: { type: Number, unique: false, required: true },
        CreateDate: { type: Date, unique: false, required: true, default: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', hour12: false }) }
    });
    const JobModel = mongoose.model('Jobs', JobsSchema);

    return this;
}

//uri = "mongodb+srv://admin:admin@cluster0-hyavj.gcp.mongodb.net/test?retryWrites=true&w=majority";