'use strict';
module.exports = async function(dataFind, dataNew){
    dataFind = {
        JobName: "JobName-Test-07"
    };

    dataNew = {
        JobName: "JobName-Test-11"
    };
    const JobModel = this.jobModel
    const result = await JobModel.findOneAndUpdate(dataFind, dataNew);
    return result;
}