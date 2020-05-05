'use strict';
module.exports = async function(){
    const Lodash = this.Lodash;
    
    const JobModel = this.jobModel
    let result = await JobModel.find({});
    console.log(result);
    if(Lodash.isEmpty(result)){
        return;
    }

    let Jobs = Lodash.transform(result, function (result, value) {
        // let nextTimeCal = (new Date(value.CreateDate) - )

        result.push(value);
        // console.log(value);
        return result;
    }, []);
    // console.log(Jobs);
    
}