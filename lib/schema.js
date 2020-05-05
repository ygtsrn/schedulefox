'use strict';

module.exports = function(){
    const self = this;
    const Mongo = this.Mongo;

    const JobsSchema = new Mongo.Schema({
        JobName: { type: String, unique: true, required: true },
        JobGroupName: { type: String, unique: false, required: false, default: "No Group" },
        TimePattern: { type: String, unique: false, required: true },
        QueueCount: { type: Number, unique: false, required: false, default: 0 },
        JobLockState: { type: Boolean, unique: false, required: true, default: true },
        JobResult: { type: String, unique: false, required: false, default: "No Result" },
        LastRunDate: { type: Date, unique: false, required: true, default: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', hour12: false }) },
        NextRunDate: { type: Date, unique: false, required: true, default: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', hour12: false }) },
        CreateDate: { type: Date, unique: false, required: true, default: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul', hour12: false }) }
    });
    const JobModel = Mongo.model('Jobs', JobsSchema);
    self.jobModel = JobModel;
    return this;
}