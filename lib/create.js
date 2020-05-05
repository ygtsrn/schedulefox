'use strict';
module.exports = async function(data){
    try {
        const Helper = this.Helper;

        data.CreateDate = Helper.fetchDateTimeNow();
        data.NextRunDate = Helper.fetchCalNextRunDate(data.CreateDate, data.TimePattern);

        const JobModel = this.jobModel
        let result = await JobModel.findOne({JobName: data.JobName});
        if(!result) {
            let Dto = new JobModel(data);
            result = await Dto.save();
            return "Job Created... =======>>>>>>> " + result.JobName;
        }
        else{
            return "Job Updated... =======>>>>>>> " + result.JobName;
        }
    } catch (error) {
        return error;
    }
}