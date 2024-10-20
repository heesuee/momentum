const images = ['1.jpeg', '2.jpeg', '3.jpeg'];

const chosenImage1 = images[Math.floor(Math.random() * images.length)];
const chosenImage2 = images[Math.floor(Math.random() * images.length)]; //[]안에 들어있는 값이 난수(랜덤한 수)를 만들어줌

const image1 = document.querySelector('img'); //있던 이미지를 선택 (html에 있으니까! 쿼리셀렉터로 가저ㅕ왔당)
const bgImage1 = document.createElement('img'); // 없던 이미지를 생성

bgImage1.src = `img/${chosenImage1}`; // 생성된 이미지에 주소를 부여해줌
image1.src = `img/${chosenImage2}`; // 생성된 이미지에 주소를 부여해줌

document.body.appendChild(bgImage1); //html로 추가해주는 것

console.log(chosenImage1);
console.log(chosenImage2);
