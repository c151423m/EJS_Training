module.exports = getDate;

function getDate() {
  var today = new Date();
  var currentDay = today.getDay();
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return day[currentDay];
}

