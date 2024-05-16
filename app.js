import "./main.css";

// Get today's date
const today = new Date();

// Get the day number in the month
const dayOfMonth = today.getDate();

// Get the month name with three letters
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthName = monthNames[today.getMonth()];

// Get the year with four numbers
const year = today.getFullYear();

// Print the results
console.log("Today's date:", dayOfMonth, monthName, year);
