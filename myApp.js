var express = require('express');
const res = require('express/lib/response');
var app = express();


console.log("Hello World");
app.get('/', (req, res) => {
    // res.send("Hello Express");
    return res.sendFile(__dirname + "/views/index.html");
});

// app.listen(3000);





























module.exports = app;