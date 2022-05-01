require('dotenv').config();
var express = require('express');
const res = require('express/lib/response');
var app = express();


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} -${req.ip}`);
    next();
});
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
// app.listen(3000);





























module.exports = app;