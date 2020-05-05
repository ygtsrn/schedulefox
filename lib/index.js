const mongoose = require('mongoose');

class ScheduleFox{
    constructor(args){
        args = args || {};
        if (!(this instanceof ScheduleFox)) {
            return new ScheduleFox(args);
          }
        this.context(args.config.uri)
        this.schema();
        // this.update();
    }
}

ScheduleFox.prototype.context = require('./context');
ScheduleFox.prototype.schema = require('./schema');
ScheduleFox.prototype.create = require('./create');
ScheduleFox.prototype.update = require('./update');

module.exports = ScheduleFox;

// "* * * * * *" // Her saniyede bir çalışır.
// "*/10 * * * * *" // Her 10 saniyede bir çalışır.
// "0 */10 * * * *" // Her 10 dakikada bir çalışır.
