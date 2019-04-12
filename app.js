//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.set("view engine", "ejs");


var item = "";
var todoList = [];

app.get("/", function(req, res) {

  var today = new Date();

  var dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  day = today.toLocaleString("en-US", dateFormat);

  //EJS
  res.render("list", {
    kindOfDay: day,
    newListItems: todoList
  });

});


app.post("/", function(req, res) {
    item = req.body.newItem;

    todoList.push(item);

    // Redirect to app.get() for rendering
    res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server started on port 3000...");
});
