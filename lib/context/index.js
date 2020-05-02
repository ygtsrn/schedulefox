const mongoose = require('mongoose');

class Context{
    constructor(config = {}){
        if (!(this instanceof Context)) {
            return new Context(config);
          }
        this.database(config.uri)
    }
}

Context.prototype.database = require('./database');

module.exports = Context;
