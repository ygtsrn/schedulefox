'use strict';
module.exports = function(){
    const This = this;
    const Mongo = This.Mongo;

    const JobsSchema = new Mongo.Schema({
        JobName: { type: String, unique: true, required: true },
        JobGroupName: { type: String, unique: false, required: false, default: "No Group" },
        TimePattern: { type: String, unique: false, required: true },
        QueueCount: { type: Number, unique: false, required: false, default: 0 },
        JobLockState: { type: Boolean, unique: false, required: true, default: true },
        JobResult: { type: String, unique: false, required: false, default: "No Result" },
        LastRunDate: { type: Date, unique: false, required: true, default: new Date(0) },
        NextRunDate: { type: Date, unique: false, required: true },
        CreateDate: { type: Date, unique: false, required: true }
    });

    const JobModel = Mongo.model('Jobs', JobsSchema);
    
    This.jobModel = JobModel;
    return This;
}