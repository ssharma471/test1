var express = require("express");
var path = require("path");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT);
console.log('Express http server listening on port http://localhost:' + HTTP_PORT);

app.get("/", (req, res) => {
    res.send("<body style='background: white;'><h2>Declaration (Instruction: text size in heading 2):</h2> <p>Instruction: The rest text is displayed in paragraph as shown in screenshot.</p>" +
    "<p> I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically"+
    "<p>from any other source.</p>"+
    "<p>Name: <mark><b>Sidhant Sharma </b></mark></p>"+
    "Student Number:<mark>123151219</mark></p>"+
    "<p><a href='/test1'>Go to Test1</a></p></body>" + "Instruction: Test1 is a link, which directs users to the route test1. ")
});

app.get('/test1', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/test1.html'));
  });

