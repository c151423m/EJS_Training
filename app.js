const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + "/date.js");

var items = ["Buy Food", "Cook", "Eat"];
let workItems = [];

//app.set('view engine','ejs') is a must to setup ejs.
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const PORT = 3000;

// this will give you the current date time etc 
var today = new Date();
//this will give you the day number. Saturday is 6 and sunday is 0 
var currentDay = today.getDay();
// day[currentDay] willl then pull the correlating string day from the array based on the index number

//res.render ("ejs file location",{variableName:variableInJs}) is to render ejs template

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // if i want to use date.js export
  // let day = date();


  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend"
  // } else {
  //   day = "Weekday"
  // }
  // res.render("list", { kindOfDay: day });


  //currentDay will retuen the day's number and this will then pick the day from day array. really clever
  res.render('list', { listTitle: day[currentDay], newItems: items })

});

app.post('/', function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item)
    res.redirect("/")
  }



})


//work page 
app.get('/work', function (req, res) {
  res.render('list', { listTitle: "Work List", newItems: workItems });

});

app.post('/work', function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})


//about page
app.get('/about', function (req, res) {
  res.render('about')
})




app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
