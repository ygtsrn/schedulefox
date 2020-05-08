'use strict';
module.exports = async function(args = {}){
    try {
        const This = this;
        const Lodash = This.Lodash;
        const JobModel = This.jobModel;

        let result = await JobModel.find({});

        if(Lodash.isEmpty(result)){
            return;
        }
    
        Lodash.forEach(result, async function(value, key) {
            await This.job(value, true);
        });
        
    } catch (error) {
        console.log(error);
        return error;
    }
}