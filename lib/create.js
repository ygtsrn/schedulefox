'use strict';
module.exports = async function(data){
    const self = this;
    const Helper = this.Helper;

    data.CreateDate = Helper.fetchDateTimeNow();
    data.NextRunDate = Helper.fetchCalNextRunDate(data.CreateDate, data.TimePattern);

    const JobModel = this.jobModel
    const result = await JobModel.findOne({JobName: data.JobName});
    if(!result) {
        let Dto = new JobModel(data);
        Dto.save((err, result) => { if (err) { return err; } return result });
    }
}