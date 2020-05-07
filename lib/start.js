'use strict';
module.exports = async function(){
    const self = this;
    const Lodash = this.Lodash;
    const Helper = this.Helper;
    const JobModel = this.jobModel

    let result = await JobModel.find({});
    if(Lodash.isEmpty(result)){
        return;
    }
    // self.emit('message', 'hello world');
    //
    Lodash.forEach(result, function(value, key) {
        let NextRunDateValue = Helper.fetchCalDateDiff(value.NextRunDate, value.CreateDate);
        setTimeout(function(){ self.emit(value.JobName, value.JobName); }, NextRunDateValue);
        console.log(value);
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