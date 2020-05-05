'use strict';

module.exports = function(dataFind, dataNew){
    const self = this;

    dataFind = {
        JobName: "JobName-Test-07"
    };

    dataNew = {
        JobName: "JobName-Test-11"
    };

    const JobModel = this.jobModel
    const CheckData = x => x || null;
    let AsyncFuncA = async(findData, newData) => CheckData(await JobModel.findOneAndUpdate(findData, newData));
    return new Promise(function(resolve, reject) {
        AsyncFuncA(dataFind, dataNew).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
    });
}