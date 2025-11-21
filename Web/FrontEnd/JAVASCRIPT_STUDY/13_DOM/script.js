// DOM (Document Object Model)
// Document 문서 -> Html
// Object -> 객체 (논리적인 기능 (CRUD) 가 적용된 객체)
// Model -> 모델 (일반적으로 통용된 약속 형태)
// DOM은 html 파일을 논리적인 CRUD가 적용된 객체화되어 통용된 형태 ****

// index.html 파일과 script.js 파일은 서로 연결되어야 함

const title = document.getElementById("title");
// title 이라는 변수에 html 내에서 id 값이 title인 태그를 찾아 저장
console.log(title); // READ

const texts = document.getElementsByClassName("text");
// texts 라는 변수에 html 내에서 class 값이 text인 태그들을 배열의 형태로 저장
console.log(texts);
console.log(texts[0].textContent);

// h2 태그인 요소에 접근
const title2 = document.querySelector("h2");
console.log(title2);

// text인 클래스에 접근 -> 2개인데 이럴 경우엔 맨 처음의 요소에만 접근이 됨
const text = document.querySelector(".text");
console.log(text);

const titleSelector = document.querySelector("#title");
console.log(titleSelector);