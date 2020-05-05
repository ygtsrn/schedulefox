const ScheduleFox = require('./lib');
const mongoUri = '';

const schedulefox = new ScheduleFox({config: {uri: mongoUri}});

let jobData01 = { JobName: "JobName-Test-03", TimePattern: "5 Minute" };


(async function() {

    let testJobs01 = await schedulefox.create(jobData01);
    // console.log(testJobs01);
    await schedulefox.start();

})();




