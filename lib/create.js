'use strict';
module.exports = async function(data){
    try {
        const This = this;
        const Helper = This.Helper;
        const JobModel = This.jobModel

        data.CreateDate = Helper.fetchDateTimeNow();
        data.NextRunDate = Helper.fetchCalNextRunDate(data.CreateDate, data.TimePattern);

        let result = await JobModel.findOne({JobName: data.JobName});
        if(!result) {
            let Dto = new JobModel(data);
            result = await Dto.save();
            return "Job Created... =======>>>>>>> " + result.JobName;
        }
        else{
            result = await JobModel.findOneAndUpdate({JobName: data.JobName}, data);
            return "Job Updated... =======>>>>>>> " + result.JobName;
        }
    } catch (error) {
        return error;
    }
}