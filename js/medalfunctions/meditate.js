let meditateClicks = localStorage.getItem("Meditate Clicks") || 0;

function meditateClick() {
  meditateClicks++;
  localStorage.setItem("Meditate Clicks", meditateClicks);
}
