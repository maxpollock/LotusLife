let lotusClicks = localStorage.getItem("Lotus Clicks") || 0;

// let lotus = document.getElementById("start");
// lotus.addEventListener("click", lotusClick);

function lotusClick() {
  lotusClicks++;
  localStorage.setItem("Lotus Clicks", lotusClicks);
}
