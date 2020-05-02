const ScheduleFox = require('./lib/scheduleFox');
const mongoUri = 'mongodb+srv://admin:admin@cluster0-hyavj.gcp.mongodb.net/ScheduleFox';

const schedulefox = new ScheduleFox({config: {uri: mongoUri}});

