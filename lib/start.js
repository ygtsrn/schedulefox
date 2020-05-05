
module.exports = async function(){
    const self = this;
    const Lodash = this.Lodash;
    
    const JobModel = this.jobModel
    const result = await JobModel.find({});
    if(Lodash.isEmpty(result)){
        return;
    }

    // let Jobs = Lodash.transform(result, function (result, value) {
    //     let nextTimeCal = (new Date(value.CreateDate) - )

    //     result.push(value);
    //     console.log(value);
    //     return result;
    // }, []);
    // // console.log(Jobs);
    // console.log(this.tlc("1 Hour"));
    
}