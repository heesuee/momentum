const loginForm = document.querySelector('login-form');
const loginInput = document.querySelector('login-form input');
const greeting = document.querySelector('greeting');

const HIDDEN_CLASSNAME = 'hidden';
//

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = 'Hello' + usernmae;
  gretting.classList.remove(HIDDEN_CLASSNAME);
  // 이거 하면 인풋창에 적고 로그인 버튼 누르면 없어지고 헬로 이름 나와야하는데 왜 안돼...
}

loginForm.addEventListener('submit', onLoginSubmit);