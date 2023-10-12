function CreateUser(name, email, birthday, country, theme) {
  this.name = name;
  this.email = email;
  this.birthday = birthday;
  this.country = country;
  this.theme = theme;
  this.breathing = 0;
  this.yoga = 0;
  this.meditation = 0;
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = event.target.name.value;
  const email = event.target.email.value;
  const dob = event.target.dob.value;
  const country = event.target.country.value;
  const theme = event.target.theme.value;

  const newUser = new CreateUser(username, email, dob, country, theme);
  newUser.generateUser();
  newUser.saveUser();
  document.getElementById("userprofile-form").classList.toggle("hidden");
  document.getElementById("userinfo-container").classList.toggle("hidden");
});

CreateUser.prototype.generateUser = function () {
  this.breathing = localStorage.getItem("Lotus Clicks");
  this.yoga = localStorage.getItem("Yoga Clicks");
  this.meditation = localStorage.getItem("Meditation Clicks");

  const userInfo = document.getElementById("userinfo-container");

  let nameID = document.getElementById("name");
  nameID.textContent = `Name: ${this.name}`;
  userInfo.appendChild(nameID);

  let emailID = document.getElementById("email");
  emailID.textContent = `Email: ${this.email}`;
  userInfo.appendChild(emailID);

  let birthdayID = document.getElementById("birthday");
  birthdayID.textContent = `Birthday: ${this.birthday}`;
  userInfo.appendChild(birthdayID);

  let countryID = document.getElementById("country");
  countryID.textContent = `Country: ${this.country}`;
  userInfo.appendChild(countryID);

  let themeID = document.getElementById("theme");
  themeID.textContent = `Theme: ${this.theme}`;
  userInfo.appendChild(themeID);
};

CreateUser.prototype.saveUser = function () {
  if (localStorage.getItem("Name") === null) {
    localStorage.setItem("Name", this.name);
    localStorage.setItem("Email", this.email);
    localStorage.setItem("DOB", this.birthday);
    localStorage.setItem("Country", this.country);
    localStorage.setItem("Theme", this.theme);
  } else {
    return;
  }
};

if (localStorage.getItem("Name")) {
  const userInfo = document.getElementById("userinfo-container");
  let name = localStorage.getItem("Name");
  let email = localStorage.getItem("Email");
  let dob = localStorage.getItem("DOB");
  let country = localStorage.getItem("Country");
  let theme = localStorage.getItem("Theme");

  let nameID = document.getElementById("name");
  nameID.textContent = `Name: ${name}`;
  userInfo.appendChild(nameID);

  let emailID = document.getElementById("email");
  emailID.textContent = `Email: ${email}`;
  userInfo.appendChild(emailID);

  let birthdayID = document.getElementById("birthday");
  birthdayID.textContent = `Birthday: ${dob}`;
  userInfo.appendChild(birthdayID);

  let countryID = document.getElementById("country");
  countryID.textContent = `Country: ${country}`;
  userInfo.appendChild(countryID);

  let themeID = document.getElementById("theme");
  themeID.textContent = `Theme: ${theme}`;
  userInfo.appendChild(themeID);

  document.getElementById("userprofile-form").classList.toggle("hidden");
} else {
  document.getElementById("userinfo-container").classList.toggle("hidden");
}

function toggleTheme() {
  // change what is in localStorage from Light to Dark or Dark to Light
  if (localStorage.getItem("Theme") === "Dark") {
    localStorage.setItem("Theme", "Light");
  } else {
    localStorage.setItem("Theme", "Dark");
  }

  // toggle the theme classes
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}
