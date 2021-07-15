const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/layout.html");
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/views'));
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});