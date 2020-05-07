'use strict';
module.exports = async function(jobName, jobResult){
    try {
        const This = this;
        const Helper = This.Helper;
        const JobModel = This.jobModel

        let findJob = await JobModel.findOne({JobName: jobName});

        let lastRunDate = Helper.fetchDateTimeNow();
        let nextRunDate = Helper.fetchCalNextRunDate(lastRunDate, findJob.TimePattern);
        let nextRunDateValue = Helper.fetchCalDateDiff(nextRunDate, lastRunDate);
        console.log(nextRunDateValue);

        let jobData = { 
            JobLockState: true, 
            JobResult: jobResult, 
            LastRunDate: lastRunDate, 
            NextRunDate: nextRunDate
        };

        let result = await This.update({JobName: jobName}, jobData);
        setTimeout(function(){ This.emit(jobName, jobName); }, nextRunDateValue);
        return result;
    } catch (error) {
        return error;
    }
}