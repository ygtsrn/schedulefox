'use strict';
module.exports = async function(jobData){
    try {
        const This = this;
        const Helper = This.Helper;
        const JobModel = This.jobModel

        jobData.CreateDate = Helper.fetchDateTimeNow();
        jobData.NextRunDate = Helper.fetchCalNextRunDate(jobData.CreateDate, jobData.TimePattern);

        let result = await JobModel.findOne({JobName: jobData.JobName});

        if(!result) {
            let Dto = new JobModel(jobData);
            result = await Dto.save();
            return "Job Created... =======>>>>>>> " + result.JobName;
        }
        else{
            result = await JobModel.findOneAndUpdate({JobName: jobData.JobName}, jobData);
            return "Job Updated... =======>>>>>>> " + result.JobName;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}