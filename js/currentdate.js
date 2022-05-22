
// create an array for weekday names
var daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

//create an array for names of months
var monthnames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

//create a new date object
var today = new Date();
//create variable to hold the day of the week that is found by passing our new date object with it's method for retrieving the weekday number, to the array with our day names to retrieve that weekday name
var dayName = daynames[today.getDay()];
//same here, using the array for month names with our date object and method
var monthName = monthnames[today.getMonth()];
//get the day of the month using our date object and getDate method
var dayNum = today.getDate();
//ditto, for the year
var year = today.getFullYear();
//combine everything into a string
var fulldate = dayName + ", " + monthName + " " + dayNum  + ", " + year;

//output our formatted date string to our html doc
document.getElementById("currentdate").innerHTML = fulldate;

// thanks Bro Blazzard. Modified original code found at: https://codepen.io/blazzard-jason/pen/JNzKpY