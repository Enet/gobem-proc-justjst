'use strict';

let justjst = require('justjst');
module.exports = function (callback) {
    return {
        process: function (next, input, output, config, fileContent, filePath) {
            callback(filePath, justjst(fileContent || ''));
            next();
        }
    };
};
