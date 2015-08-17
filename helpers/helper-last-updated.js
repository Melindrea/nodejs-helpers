'use strict';
module.exports.lastUpdated = function () {
    var fs = require('fs'),
        moment = require('moment'),
        Handlebars = require('handlebars'),
        sprintf = require('sprintf-js').sprintf,
        file = this.context.originalPath,
        fileStats = fs.statSync(file),
        lastUpdated = moment(fileStats.mtime),
        time = sprintf('<time itemprop="dateModified" datetime="%s">%s</time>', lastUpdated.format(), lastUpdated.format('YYYY-MM-DD'));

        return new Handlebars.SafeString(time);
};
