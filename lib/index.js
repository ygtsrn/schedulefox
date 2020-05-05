const mongoose = require('mongoose');
const _ = require('lodash');

class ScheduleFox{
    constructor(args){
        args = args || {};
        if (!(this instanceof ScheduleFox)) {
            return new ScheduleFox(args);
          }
        this.Mongo = mongoose;
        this.Lodash = _;
        this.context(args.config.uri)
        this.schema();
        // this.update();
    }
}

// ScheduleFox.prototype.tlc = require('./tlc');
ScheduleFox.prototype.Helper = require('./helper');
ScheduleFox.prototype.context = require('./context');
ScheduleFox.prototype.schema = require('./schema');
ScheduleFox.prototype.create = require('./create');
ScheduleFox.prototype.update = require('./update');
ScheduleFox.prototype.start = require('./start');

module.exports = ScheduleFox;

// "* * * * * *" // Her saniyede bir çalışır.
// "*/10 * * * * *" // Her 10 saniyede bir çalışır.
// "0 */10 * * * *" // Her 10 dakikada bir çalışır.
