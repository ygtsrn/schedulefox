'use strict';

module.exports = function(data){
    const self = this;

    const JobModel = this.jobModel
    const CheckData = x => x || false;
    let AsyncFuncA = async(x) => CheckData(await JobModel.findOne(x));
    return new Promise(function(resolve, reject) {
        AsyncFuncA({JobName: data.JobName}).then(result => {
            if (!result) {
                let Dto = new JobModel(data);
                Dto.save((err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
            resolve("Job existing...");
        }).catch(err => { reject(err); });
    });







}