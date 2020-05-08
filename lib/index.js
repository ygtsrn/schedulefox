const {EventEmitter} = require('events');
const mongoose = require('mongoose');
const _ = require('lodash');

class ScheduleFox extends EventEmitter {
    constructor(args){
    super();
        args = args || {};

        if (!(this instanceof ScheduleFox)) {
            return new ScheduleFox(args);
        }

        this.Sets = args.sets || { Immediately: false, QueueReprocessing: 1 };
        this.Config = args.config || { uri: "" };
        this.Mongo = mongoose;
        this.Lodash = _;
        this.context(this.Config.uri)
        this.schema();
    }
}

ScheduleFox.prototype.Helper = require('./helper');
ScheduleFox.prototype.context = require('./context');
ScheduleFox.prototype.schema = require('./schema');
ScheduleFox.prototype.create = require('./create');
ScheduleFox.prototype.update = require('./update');
ScheduleFox.prototype.start = require('./start');
ScheduleFox.prototype.finish = require('./finish');
ScheduleFox.prototype.job = require('./job');

module.exports = ScheduleFox;