const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");


function onLoginBtnClick() {
const HIDDEN_CLASSNAME = "hidden";
}


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
