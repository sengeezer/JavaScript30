var currDate = new Date();
var month = currDate.getUTCMonth()+1;
var day = currDate.getUTCDate();
var hour = currDate.getUTCHours();
var minutes = currDate.getUTCMinutes();

if (month < 10) {
  month = '0' + month;
}

if (day < 10) {
  day = '0' + day;
}

if (hour < 10) {
  hour = '0' + hour;
}

if (minutes < 10) {
  minutes = '0' + minutes;
}


var imgString = '192.168.1.180_01_' + currDate.getUTCFullYear().toString() + month + day + hour + minutes + '_TIMING';

console.log(imgString);
