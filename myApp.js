var express = require('express');
const res = require('express/lib/response');
var app = express();


console.log("Hello World");
app.get('/', () => {
    return res.send("Hello Express");
});































module.exports = app;