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
  currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednesday"
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;

    default:
      day = "Day Unknown";
      console.log("Error: currentDay equals: " + currentDay);

  }

  res.render("list", {
    kindOfDay: day
  });

});


app.listen(3000, function() {
  console.log("Server started on port 3000...");
});
