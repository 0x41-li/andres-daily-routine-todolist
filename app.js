//
import moment from "moment";
import animejs from "animejs";

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

    taskLi.addEventListener("click", () => {
      // Get the text and line through elements
      // plus the circle checkbox
      const textEl = taskLi.children[1].children[0];
      const lineThroughEl = taskLi.children[1].children[1];
      const circleCheckboxEl = taskLi.children[0];
      const checkInsideTheCircleCheckboxEl = circleCheckboxEl.children[0];

      // Toggle between completed and not completed
      // Using the data-completed attribute
      if (
        !taskLi.getAttribute("data-completed") ||
        taskLi.getAttribute("data-completed") == "false"
      ) {
        taskLi.setAttribute("data-completed", "true");

        // Animate the line through the task
        animejs({
          targets: lineThroughEl,
          width: ["0%", "100%"],
          opacity: [0, 1],
          duration: 500,
          easing: "linear",
        });

        // Change the text color
        textEl.classList.remove("text-gray-700");
        textEl.classList.add("text-gray-500");

        // Change the circle checkbox color
        circleCheckboxEl.classList.add("bg-green-500");

        // Show the check inside the circle
        checkInsideTheCircleCheckboxEl.classList.remove("hidden");
      } else {
        taskLi.setAttribute("data-completed", "false");

        // Animate the line through the task
        animejs({
          targets: lineThroughEl,
          width: ["100%", "0%"],
          opacity: [1, 0],
          duration: 500,
          easing: "linear",
        });

        // Change the text color
        textEl.classList.add("text-gray-700");
        textEl.classList.remove("text-gray-500");

        // Change the circle checkbox color
        circleCheckboxEl.classList.remove("bg-green-500");

        // Show the check inside the circle
        checkInsideTheCircleCheckboxEl.classList.add("hidden");
      }
    });
  }
});
