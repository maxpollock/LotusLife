function toggleAnimation() {
  document.getElementById("circle").classList.toggle("on");

  updateBtn();
}

const animationBtn = document.getElementById("animation");
animationBtn.addEventListener("click", toggleAnimation);
localStorage.setItem("Button", "Start");

function updateBtn() {
  let circle = document.getElementById("animation");

  if (circle.textContent === "Start") {
    circle.textContent = "Stop";
  } else {
    circle.textContent = "Start";
  }
}
