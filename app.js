const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');

var randomAvatar = faker.image.technics();

app.get("/", function(req, res){
    res.render("index.html", {"randomAvatar":randomAvatar}); 
});

app.get("/home", function(req, res){
    res.render("index.html", {"randomAvatar":randomAvatar}); 
});

app.get("/superComputer", function(req, res){
    res.render("superComputer.html"); 
});

app.get("/mainframeComputer", function(req, res){
    res.render("mainframeComputer.html"); 
});

app.get("/personalComputer", function(req, res){
    res.render("personalComputer.html"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});