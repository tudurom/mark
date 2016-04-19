#!/usr/bin/node

function usage() {
    console.error("usage: mark <file>");
}

var marked = require('marked');
var fs = require('fs');

if (!process.argv[2]) {
    usage();
    process.exit(1);
}

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        if (err.code == 'ENOENT') {
            console.error(`${process.argv[2]} - no such file`);
        } else {
            console.error(err);
        }
        process.exit(1);
    }

    marked.setOptions({
        highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
        },
        gfm: true,
        smartypants: true
    });

    console.log(marked(data));
});
