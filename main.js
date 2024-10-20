const clockTitle = document.querySelector('.js-clock');

function getClock() {
  const date = new Date(); //날짜를 다룰 수 있는 함수
  clockTitle.innerText = ` ${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()}`;
} //클락타이틀에 오른쪽에서 불러온 값을 넣겠다!

// getClock(); // 새고할때마다 값을 가져오기
setInterval(getClock, 1000); //새고 안해도 1초마다 가져오기
