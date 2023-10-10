function breathPausePlayToggle() {
  let circle = document.getElementById("circle");

  const running = circle.style.animationPlayState === "running";

  circle.style.animationPlayState = running ? "paused" : "running";
}

const button = document.querySelector(".start");

button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});
