let styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

let alternateStyles = document.querySelectorAll(".alternate-style");
let setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};

// Theme Light & Dark Mode
let dayNight = document.querySelector(".day-night");
let dayIcon = dayNight.querySelector("i");
dayNight.addEventListener("click", () => {
  dayIcon.classList.toggle("fa-sun");
  dayIcon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayIcon.classList.add("fa-sun");
  } else {
    dayIcon.classList.add("fa-moon");
  }
});
