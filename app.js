//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs");


//let item = "";
let items = [];
let workItems = [];


app.get("/", function(req, res) {

  let today = new Date();

  let dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  day = today.toLocaleString("en-US", dateFormat);

  //EJS
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
    let item = req.body.newItem;

    items.push(item);

    // Redirect to app.get() for rendering
    res.redirect("/");
});


app.get("/work", function(req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;

  workItems.push(item);

  res.redirect("/work");

});



app.listen(3000, function() {
  console.log("Server started on port 3000...");
});
