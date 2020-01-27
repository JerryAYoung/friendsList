var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = []

app.post("/addfriend", function(req, res){
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
});

app.get("*", function(req, res){
	res.redirect("/friends");
});

app.listen(3000, function(){
	console.log("Server running on port: 3000!")
});