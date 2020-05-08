'use strict';
module.exports = async function(dataFind, dataNew){
    try {
        const This = this;
        const JobModel = This.jobModel

        let result = await JobModel.findOneAndUpdate(dataFind, dataNew, { new: true });

        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}