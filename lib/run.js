'use strict'
module.exports = async function(jobData) {
    try {

        console.log(jobData);

        const This = this;
        const Helper = This.Helper;
        const JobModel = This.JobModel;

        if (!jobData.JobLockState) {
            if(jobData.QueueCount >= This.Sets.QueueReprocessing){
                let result = await This.update({JobName: jobData.JobName}, { JobLockState: true, QueueCount: 0 });
                This.job(result);
            }
            else{
                let result = await This.update({JobName: jobData.JobName}, { QueueCount: jobData.QueueCount + 1 });
                This.job(result);
            }
            return;
        }
        await This.update({JobName: jobData.JobName}, { JobLockState: false });
        let nextRunDateValue = Helper.fetchCalTimePattern(jobData.TimePattern);
        console.log(nextRunDateValue);
        setTimeout(function(){ This.emit(jobData.JobName, jobData.JobName); }, nextRunDateValue);
        return true;
    } catch (error) {
        return error;
    }
}