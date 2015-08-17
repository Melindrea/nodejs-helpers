'use strict';
module.exports.canonical = function () {
    var site = this.options.pkg.homepage,
        canonical = this.context.dest.path
            .replace('.tmp', site)
            .replace(this.context.dest.name + '.html', '');

    return canonical;
};
