'use strict';
module.exports = async function(){
    const This = this;
    const Lodash = This.Lodash;
    const Helper = This.Helper;
    const JobModel = This.jobModel

    let result = await JobModel.find({});
    if(Lodash.isEmpty(result)){
        return;
    }

    Lodash.forEach(result, async function(value, key) {
        if (!value.JobLockState) {
            return;
        }
        await This.update({JobName: value.JobName}, { JobLockState: false });
        let NextRunDateValue = Helper.fetchCalDateDiff(value.NextRunDate, value.CreateDate);
        setTimeout(function(){ This.emit(value.JobName, value.JobName); }, NextRunDateValue);
        // console.log(value);
        // setTimeout(function(){ alert("Hello"); }, 3000);
        // setTimeout(jobProcessing, runIn);
    });
    //
    // let Jobs = Lodash.transform(result, function (result, value) {
    //     // let nextTimeCal = (new Date(value.CreateDate) - )
    //     value.QueueCount = 1;
    //     value.Diff = Helper.fetchCalDateDiff(value.NextRunDate, value.CreateDate);
    //     result.push(value);
    //     // console.log(value);
    //     return result;
    // }, []);
    // console.log(Jobs);
    //
}