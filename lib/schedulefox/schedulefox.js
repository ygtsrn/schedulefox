const {EventEmitter} = require('events');

/**
 * @class ScheduleFox
 * @param {Object} config - ScheduleFox Config
 * @param {Function} callBack - Callback after ScheduleFox has started and connected to MongoDb.
*/
class ScheduleFox extends EventEmitter {
    constructor(config = {}, callBack){
        super();
        if(!(this instanceof ScheduleFox)){
            return new ScheduleFox(config);
        }
    }
}

module.exports = ScheduleFox;
