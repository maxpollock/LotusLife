const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const subs = document.getElementById("subs");
  const p = document.createElement("p");
  p.textContent = `Thanks for filling in the form ${name}. We will respond to your message "${message}" using the email you provided. (${email}.)`;
  subs.appendChild(p);
});
