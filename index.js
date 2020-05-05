const ScheduleFox = require('./lib');
const mongoUri = 'mongodb+srv://admin:admin@cluster0-hyavj.gcp.mongodb.net/ScheduleFox';

const schedulefox = new ScheduleFox({config: {uri: mongoUri}});

 data = {
        JobName: "JobName-Test-01",
        TimePattern: "*/10 * * * * *"
    };

schedulefox.create(data);

// schedulefox.dbService.prototype

// schedulefox.context.prototype.mongoService.

// schedulefox.

