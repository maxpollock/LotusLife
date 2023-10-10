let yogaClicks = localStorage.getItem("Yoga Clicks") || 0;

function yogaClick() {
  yogaClicks++;
  localStorage.setItem("Yoga Clicks", yogaClicks);
}
