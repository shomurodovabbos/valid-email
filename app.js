const form = document.querySelector("form");
const input = document.getElementById("input");
const error = document.querySelector("small");
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value === "") {
    showError();
  } else if (!validateEmail(input.value)) {
    showError();
  } else {
    showSuccess();
  }
});
function showError() {
  error.classList.add("visible");
  input.classList.add("visible");
  input.placeholder = "example@email/com";
}
function showSuccess() {
  error.classList.remove("visible");
  input.classList.remove("visible");
  input.placeholder = "";
}
