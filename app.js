//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");


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
    newListItem: item
  });

});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    // console.log(item);
    // Capture the new item, redirect to app.get()
    // But... error because 'item' is not defined, since it only exists inside this post function #Scope
    res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server started on port 3000...");
});
