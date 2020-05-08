'use strict'
module.exports = async function(jobData, isStart = false) {
    try {
        const This = this;
        const Helper = This.Helper;
        let immediately = This.Sets.Immediately || false;
        let nextRunDateValue = Helper.fetchCalTimePattern(jobData.TimePattern);

        if (!jobData.JobLockState) {
            if(jobData.QueueCount >= This.Sets.QueueReprocessing){
                let result = await This.update({JobName: jobData.JobName}, { JobLockState: true, QueueCount: 0 });
                setTimeout(function(){ This.job(result); }, nextRunDateValue);
            }
            else{
                let result = await This.update({JobName: jobData.JobName}, { QueueCount: jobData.QueueCount + 1 });
                setTimeout(function(){ This.job(result); }, nextRunDateValue);
            }
            return;
        }
        setTimeout(async function() {
            await This.update({JobName: jobData.JobName}, { JobLockState: false });
            This.emit(jobData.JobName, jobData.JobName); 
        }, isStart == true ? immediately == true ? 0 : nextRunDateValue : nextRunDateValue);
        return true;
    } catch (error) {
        console.log(error);
        return error;
    }
}