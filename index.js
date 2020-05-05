const ScheduleFox = require('./lib');
const mongoUri = '';

const schedulefox = new ScheduleFox({config: {uri: mongoUri}});

 let jobData01 = { JobName: "JobName-Test-09", TimePattern: "10 Minute" };

schedulefox.create(jobData01, async x => {
    console.log(x);
});

// schedulefox.start();
