const ScheduleFox = require('./lib');
const mongoUri = 'mongodb+srv://.mongodb.net/ScheduleFox';

const schedulefox = new ScheduleFox({config: {uri: mongoUri}});

let jobData01 = { JobName: "JobName-Test-01", JobGroupName: "Test", TimePattern: "5 Second" };
let jobData02 = { JobName: "JobName-Test-02", JobGroupName: "Test", TimePattern: "10 Second" };
// let jobData03 = { JobName: "JobName-Test-03", TimePattern: "15 Minute" };
// let jobData04 = { JobName: "JobName-Test-04", TimePattern: "20 Minute" };

function resolveJobOne() {
    return new Promise(resolve => {
        console.log("resolveJob-1 Start... Job Runing Waiting 2000 ms...");
        setTimeout(() => {
            resolve('resolveJob-1 Finish... Job Result =======>>>>>>> ' + '{Data01: "123", Data02: "456", Data03: "789"}');
        }, 2000);
    });
}
function resolveJobTwo() {
    return new Promise(resolve => {
        console.log("resolveJob-2 Start... Job Runing Waiting 4000 ms...");
        setTimeout(() => {
            resolve('resolveJob-2 Finish... Job Result =======>>>>>>> ' + '{Data01: "987", Data02: "654", Data03: "321"}');
        }, 4000);
    });
}

schedulefox.on('JobName-Test-01', async function (arg) {
    // console.log(arg)
    let result = await resolveJobOne();
    await schedulefox.finish('JobName-Test-01', result);
    console.log(result);
});

schedulefox.on('JobName-Test-02', async function (arg) {
    // console.log(arg)
    let result = await resolveJobTwo();
    await schedulefox.finish('JobName-Test-02', result);
    console.log(result);
});

(async function() {

    let testJobs01 = await schedulefox.create(jobData01);
    let testJobs02 = await schedulefox.create(jobData02);
    // let testJobs03 = await schedulefox.create(jobData03);
    // let testJobs04 = await schedulefox.create(jobData04);
    // console.log(testJobs01);
    await schedulefox.start();

})();




