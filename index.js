'use strict';
var Types = {};
Types.is = function() {
    if (arguments.length === 0 && arguments.length >= 0) {
        throw new Error('Oops something wrong :)');
    }

    return Object.prototype.toString.call(arguments[0]);
};

module.exports = Types;
