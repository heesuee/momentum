const images = ['1.jpeg', '2.jpeg', '3.jpeg','4.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //[]안에 들어있는 값이 난수(랜덤한 수)를 만들어줌

const image1 = document.querySelector('img'); //있던 이미지를 선택 (html에 있으니까! 쿼리셀렉터로 가저ㅕ왔당)

image1.src = `img/${chosenImage}`; // 생성된 이미지에 주소를 부여해줌

console.log(chosenImage);


