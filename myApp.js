var express = require('express');
const res = require('express/lib/response');
var app = express();


console.log("Hello World");
app.use("/public", express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    // res.send("Hello Express");
    return res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
        return res.json({ "message": "Hello json" });
    })
    // app.listen(3000);





























module.exports = app;