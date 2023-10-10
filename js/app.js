function breathPausePlayToggle() {
  let circle = document.getElementById("circle");

  const running = circle.style.animationPlayState === "running";

  circle.style.animationPlayState = running ? "paused" : "running";
}
