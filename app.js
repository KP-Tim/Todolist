const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let items = ["Buy food", "Cook food", "Eat food"];
app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";
  let options = { weekday: "long", month: "long", day: "numeric" };
  day = today.toLocaleString("en-US", options);
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  // }
  // if (today.getDay() === 0) {
  //   day = "Sunday";
  // } else if (today.getDay() === 1) {
  //   day = "Monday";
  // } else if (today.getDay() === 2) {
  //   day = "Tuesday";
  // } else if (today.getDay() === 3) {
  //   day = "Wednesday";
  // } else if (today.getDay() === 4) {
  //   day = "Thursday";
  // } else if (today.getDay() === 5) {
  //   day = "Friday";
  // } else if (today.getDay() === 6) {
  //   day = "Saturday";
  // }
  // for (let i = 0; i < items.length; i++) {
  //   let list = document.createElement("li");
  //   list.innerText = items[i];
  //   document.querySelector(".box").appendChild(list);
  // }
  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Port 3000 is listening!");
});
