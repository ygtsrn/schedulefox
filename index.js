const ScheduleFox = require('./lib');
const mongoUri = '';

const schedulefox = new ScheduleFox({config: {uri: mongoUri}});

let jobData01 = { JobName: "JobName-Test-01", JobGroupName: "Test", TimePattern: "5 Minute" };
let jobData02 = { JobName: "JobName-Test-02", JobGroupName: "Test", TimePattern: "10 Minute" };
let jobData03 = { JobName: "JobName-Test-03", TimePattern: "15 Minute" };
let jobData04 = { JobName: "JobName-Test-04", TimePattern: "20 Minute" };

// this.on('message', function (text) {
//     console.log(text)
// });

function resolveJobOne() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolveJob-1 =======>>>>>>> ' + '{Data01: "123", Data02: "456", Data03: "789"}');
        }, 2000);
    });
}
function resolveJobTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolveJob-2 =======>>>>>>> ' + '{Data01: "987", Data02: "654", Data03: "321"}');
        }, 4000);
    });
}

schedulefox.on('JobName-Test-01', async function (arg) {
    console.log(arg)
    let result = await resolveJobOne();
    console.log(result);
});

schedulefox.on('JobName-Test-02', async function (arg) {
    console.log(arg)
    let result = await resolveJobTwo();
    console.log(result);
});

(async function() {

    let testJobs01 = await schedulefox.create(jobData01);
    let testJobs02 = await schedulefox.create(jobData02);
    let testJobs03 = await schedulefox.create(jobData03);
    let testJobs04 = await schedulefox.create(jobData04);
    // console.log(testJobs01);
    await schedulefox.start();

})();




