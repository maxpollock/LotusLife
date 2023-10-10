let lotusClicks = localStorage.getItem("Lotus Clicks") || 0;

function lotusClick() {
  lotusClicks++;
  localStorage.setItem("Lotus Clicks", lotusClicks);
}
