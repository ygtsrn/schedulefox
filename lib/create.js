'use strict';

module.exports = function(data){
    const self = this;

    const JobModel = this.jobModel
    return new Promise(function(resolve, reject) {
        let Dto = new JobModel(data);
        Dto.save((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}