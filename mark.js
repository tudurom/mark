#!/usr/bin/node
var marked = require('marked');
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
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
