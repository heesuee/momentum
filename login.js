const loginForm = document.querySelector('#login-form'); //#은 아이디를 의미, .은 클래스, 아무것도 안붙히면 html태그
const loginInput = document.querySelector('#login-form input'); 
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
//

function onLoginSubmit(event) {
  event.preventDefault();
  greeting.classList.remove(HIDDEN_CLASSNAME);  
  const username = loginInput.value;
  greeting.innerText = 'Hello ' + username;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // 이거 하면 인풋창에 적고 로그인 버튼 누르면 없어지고 헬로 이름 나와야하는데 왜 안돼...
}

loginForm.addEventListener('submit', onLoginSubmit);