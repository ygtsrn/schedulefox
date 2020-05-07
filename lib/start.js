'use strict';
module.exports = async function(args = {}){
    try {
        const This = this;
        const Lodash = This.Lodash;
        const Helper = This.Helper;
        const JobModel = This.jobModel;
        let immediately = args.Immediately || false;
        let queueReprocessing = (args.QueueReprocessing || 2) - 1;

        let result = await JobModel.find({});
        if(Lodash.isEmpty(result)){
            return;
        }
    
        Lodash.forEach(result, async function(value, key) {
            if (!value.JobLockState) {
                    if(value.QueueCount >= queueReprocessing)
                        await This.update({JobName: value.JobName}, { JobLockState: true, QueueCount: 0 });
                    else
                        await This.update({JobName: value.JobName}, { QueueCount: value.QueueCount + 1 });
                return;
            }
            await This.update({JobName: value.JobName}, { JobLockState: false });
            let NextRunDateValue = Helper.fetchCalDateDiff(value.NextRunDate, value.CreateDate);
            setTimeout(function(){ This.emit(value.JobName, value.JobName); }, immediately == true ? 0 : NextRunDateValue);
        });
    } catch (error) {
        return error;
    }
}