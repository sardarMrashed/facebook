var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.querySelector(".dark-btn-on"); // Add the dot here

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}


darkBtn.onclick = function () { 
  darkBtn.classList.toggle("dark-btn-on");
  // Toggle the dark theme
  document.body.classList.toggle("dark-theme");

  // Get the current theme from localStorage
  let currentTheme = localStorage.getItem("theme");

  // Switch the theme and update localStorage
  if (currentTheme === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Check the saved theme on page load
if (localStorage.getItem("theme") === "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") === "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light"); // Default to light
}
