var express = require('express');
const res = require('express/lib/response');
var app = express();


console.log("Hello World");
app.get('/', () => {
    return res.sand("Hello Express");
});































module.exports = app;