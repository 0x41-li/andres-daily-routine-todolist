//
import moment from "moment";

// css
import "./main.css";

// code

document.addEventListener("DOMContentLoaded", () => {
  // Get the HTML elements related to the widget head
  // Where the date and time is displayed
  const monthShortName = document.getElementById("month-short-name");
  const dayNumber = document.getElementById("day-number");
  const year = document.getElementById("year");
  const dayName = document.getElementById("day-name");
  const time = document.getElementById("time");

  // Get the current date
  const date = moment();

  // Fill the corresponding HTML with date data
  monthShortName.textContent = date.format("MMM");
  dayNumber.textContent = date.format("D");
  year.textContent = date.format("YYYY");
  dayName.textContent = date.format("dddd");
  time.textContent = moment().format("HH:mm:ss");

  // Update the time
  setInterval(() => {
    time.textContent = moment().format("HH:mm:ss");
  }, 1000);

  // Get the ul where the tasks items are
  const tasksUl = document.getElementById("tasks-ul");

  for (let i = 0; i < tasksUl.children.length; i++) {
    const taskLi = tasksUl.children[i];
    console.log(taskLi);
  }
});
