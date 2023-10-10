function toggleAnimation() {
  document.getElementById("circle").classList.toggle("on");
  let circle = document.getElementById("animation");
  circle.textContent = "Stop";
}

const animationBtn = document.getElementById("animation");
animationBtn.addEventListener("click", toggleAnimation);
localStorage.setItem("Button", "Start");
