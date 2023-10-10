let yogaClicks = localStorage.getItem("Yoga Clicks") || 0;

let yoga1 = document.getElementById("yoga1");
let yoga2 = document.getElementById("yoga2");
let yoga3 = document.getElementById("yoga3");

let yogaVideos = document.querySelectorAll("iframe");
yogaVideos.addEventListener("click", yogaClick);

yoga1.addEventListener("click", yogaClick);
yoga2.addEventListener("click", yogaClick);
yoga3.addEventListener("click", yogaClick);

function yogaClick() {
  yogaClicks++;
  localStorage.setItem("Yoga Clicks", yogaClicks);
}
