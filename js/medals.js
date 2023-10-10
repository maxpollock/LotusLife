// Breathing Lotus
// Meditation Track
// Yoga Video
let lotusClicks = localStorage.getItem("Lotus Clicks") || 0;
let meditateClicks = localStorage.getItem("Meditate Clicks") || 0;
let yogaClicks = localStorage.getItem("Yoga Clicks") || 0;

// Lotus App
let lotusApp = document.getElementById("start");

// Mediation Audio
let mediate1 = document.getElementById("mediate1");
let mediate2 = document.getElementById("mediate2");
let mediate3 = document.getElementById("mediate3");

// Yoga Videos
let yoga1 = document.getElementById("yoga1");
let yoga2 = document.getElementById("yoga2");
let yoga3 = document.getElementById("yoga3");

lotusApp.addEventListener("click", lotusClick);

mediate1.addEventListener("click", meditateClick);
mediate2.addEventListener("click", meditateClick);
mediate3.addEventListener("click", meditateClick);

yoga1.addEventListener("click", yogaClick);
yoga2.addEventListener("click", yogaClick);
yoga3.addEventListener("click", yogaClick);

// a click event function that increase the correct click counter and runs the below function
function lotusClick() {
  lotusClicks++;
  localStorage.setItem("Lotus Clicks", lotusClicks);
  medalCheck();
}

function meditateClick() {
  meditateClicks++;
  localStorage.setItem("Meditate Clicks", meditateClicks);
  medalCheck();
}

function yogaClick() {
  yogaClicks++;
  localStorage.setItem("Yoga Clicks", yogaClicks);
  medalCheck();
}

// function that checks yoga, lotus and meditate clicks and add relevant image medals

function medalCheck() {
  let awards = document.getElementById("awards");

  if (lotusClicks === 5) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let lotus5 = document.createElement("img");
    lotus5.src = "./images/medal-5.png";

    let lotus5text = document.createElement("p");
    lotus5text.textContent = "Used Breathing Lotus 5 times";

    medalsDiv.appendChild(lotus5);
    medalsDiv.appendChild(lotus5text);
    awards.appendChild(medalsDiv);
  }

  if (meditateClicks === 5) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let meditate5 = document.createElement("img");
    meditate5.src = "./images/medal-5.png";

    let meditate5text = document.createElement("p");
    meditate5text.textContent = "Meditated 5 times";

    medalsDiv.appendChild(meditate5);
    medalsDiv.appendChild(meditate5text);
    awards.appendChild(medalsDiv);
  }

  if (yogaClicks === 5) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let yoga5 = document.createElement("img");
    yoga5.src = "./images/medal-5.png";

    let yoga5text = document.createElement("p");
    yoga5text.textContent = "Practiced Yoga 5 times";

    medalsDiv.appendChild(yoga5);
    medalsDiv.appendChild(yoga5text);
    awards.appendChild(medalsDiv);
  }

  if (lotusClicks === 10) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let lotus10 = document.createElement("img");
    lotus10.src = "./images/medal-5.png";

    let lotus10text = document.createElement("p");
    lotus10text.textContent = "Used Breathing Lotus 10 times";

    medalsDiv.appendChild(lotus10);
    medalsDiv.appendChild(lotus10text);
    awards.appendChild(medalsDiv);
  }
  if (meditateClicks === 10) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let meditate10 = document.createElement("img");
    meditate10.src = "./images/medal-5.png";

    let meditate10text = document.createElement("p");
    meditate10text.textContent = "Meditated 10 times";

    medalsDiv.appendChild(meditate10);
    medalsDiv.appendChild(meditate10text);
    awards.appendChild(medalsDiv);
  }
  if (yogaClicks === 10) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let yoga10 = document.createElement("img");
    yoga10.src = "./images/medal-5.png";

    let yoga10text = document.createElement("p");
    yoga10text.textContent = "Practiced Yoga 10 times";

    medalsDiv.appendChild(yoga10);
    medalsDiv.appendChild(yoga10text);
    awards.appendChild(medalsDiv);
  }

  if (lotusClicks === 20) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let lotus20 = document.createElement("img");
    lotus20.src = "./images/medal-5.png";

    let lotus20text = document.createElement("p");
    lotus20text.textContent = "Used Breathing Lotus 20 times";

    medalsDiv.appendChild(lotus20);
    medalsDiv.appendChild(lotus20text);
    awards.appendChild(medalsDiv);
  }
  if (meditateClicks === 20) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let meditate20 = document.createElement("img");
    meditate20.src = "./images/medal-5.png";

    let meditate20text = document.createElement("p");
    meditate20text.textContent = "Meditated 20 times";

    medalsDiv.appendChild(meditate20);
    medalsDiv.appendChild(meditate20text);
    awards.appendChild(medalsDiv);
  }
  if (yogaClicks === 20) {
    let medalsDiv = document.createElement("div");
    medalsDiv.classList.add("medals");
    let yoga20 = document.createElement("img");
    yoga20.src = "./images/medal-5.png";

    let yoga20text = document.createElement("p");
    yoga20text.textContent = "Practiced Yoga 20 times";

    medalsDiv.appendChild(yoga20);
    medalsDiv.appendChild(yoga20text);
    awards.appendChild(medalsDiv);
  }
}
