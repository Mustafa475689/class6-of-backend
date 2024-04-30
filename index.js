const express = require('express');
const app = express();
const path = require("path");

// set up parser form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set up haandling form
app.use(express.static(path.join(__dirname, "public"))); // add this line to join front end with server
// set up ejs
app.set("view engine", "ejs");
// ejs

// basic route
app.get("/", function(req, res){
    res.render("index");
});

// this is dynamic routes
app.get("/profile/:username", function(req, res){
    // req.params ka mtlb huta ha esa kuch bhi jisky agy : ha
    res.send(`welcome, ${req.params.username}`);
});


app.get("/author/:username/:age", function(req, res){
    
    res.send(req.params);
});
// ..
// made server
app.listen(3000, function() {
    console.log("chal rha hu bhai");
})


