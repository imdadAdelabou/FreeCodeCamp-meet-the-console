require('dotenv').config();
var express = require('express');
const bodyParser = require("body-parser");
const res = require('express/lib/response');
var app = express();


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    // res.send("Hello Express");
    return res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
    let result = "";

    if (process.env.MESSAGE_STYLE == "uppercase") {
        result = "Hello json".toUpperCase();
    } else {
        result = "Hello json";
    }
    return res.json({ "message": result });
});
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res, next) => {
    return res.json({ "time": req.time });
});
app.get("/:word/echo", (req, res, next) => {
    let word = req.params.word;

    return res.json({ "echo": word });
});
app.get("/name", (req, res, next) => {

    return res.json({ "name": `${req.query.first} ${req.query.last}` });
});
app.listen(3000);





























module.exports = app;