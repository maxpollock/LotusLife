// get the current theme, and add the relevant class
const theme = localStorage.getItem("Theme");

if (theme === "Light") {
  // if the LS theme is Light
  document.body.classList.add("light");
} else if (theme === "Dark") {
  // if the LS theme is Dark
  document.body.classList.add("dark");
} else {
  // if we HAVEN'T got a LS theme
  document.body.classList.add("light");
  // add the Light theme if there is none
  localStorage.setItem("Theme", "Light");
}

function toggleTheme() {
  // change what is in localStorage from Light to Dark or Dark to Light
  if (localStorage.getItem("Theme") === "Dark") {
    localStorage.setItem("Theme", "Light");
  } else {
    localStorage.setItem("Theme", "Dark");
  }

  // toggle the theme classes
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", toggleTheme);
