'use strict';
module.exports = async function(dataFind, dataNew){
    const This = this;
    const JobModel = This.jobModel
    let result = await JobModel.findOneAndUpdate(dataFind, dataNew);
    return result;
}