let meditateClicks = localStorage.getItem("Meditate Clicks") || 0;

let mediate1 = document.getElementById("morning");
let mediate2 = document.getElementById("nighttime");
let mediate3 = document.getElementById("calming");

mediate1.addEventListener("click", meditateClick);
mediate2.addEventListener("click", meditateClick);
mediate3.addEventListener("click", meditateClick);

function meditateClick() {
  meditateClicks++;
  localStorage.setItem("Meditate Clicks", meditateClicks);
  medalCheck();
}
