const Context = require('./context');

class ScheduleFox {
    constructor(args){
        args = args || {};


        console.log(args);
        new Context(args.config)

    }
}

// ScheduleFox.prototype.context = require('./context');


module.exports = ScheduleFox;
