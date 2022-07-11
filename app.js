const express = require("express");
const bodyParser = require("body-parser");



const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// EJS Engine
app.set("view engine", "ejs");

// Public Folder
// app.use(express.static("public"));

app.use(express.static('public'));


// Home Route
app.get("/", function (req, res) {
    res.render("home.ejs");
    // res.render("Hello world");
});


app.get('/sign-in', function (req, res) {
    res.render("sign-in.ejs");
})

app.get('/user', function (req, res) {
    res.render("user.ejs");
})

app.get('/ai-ml-lab', function (req, res) {
    res.render("ai-ml-lab.ejs");
})

app.get('/cn-lab', function (req, res) {
    res.render("cn-lab.ejs");
})

app.get('/big-data-lab', function (req, res) {
    res.render("big-data-lab.ejs");
})
app.get('/iot-lab', function (req, res) {
    res.render("iot-lab.ejs");
})

app.get('/about-us', function (req, res) {
    res.render("about-us.ejs");
})

app.get('/contact-us', function (req, res) {
    res.render("contact-us.ejs");
})

app.listen(3000, function () {
    console.log("Server started at port 3000");
});



