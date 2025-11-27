// DOM 연결 후 요소 제어
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const resetButton = document.getElementById("resetBtn");
const resultButton = document.getElementById("resultBtn");

// 현재 input 태그 안 데이터를 초기화 시키는 함수 설계
// 데이터를 작성하다보면 공간이 필요, 그 공간을 저장하는 공간을 초기화 하는 작업 필요
let currentInput = "";

// 연산자 구별 정규식
const operatorRegex = /^[+-/*/]$/;

// 숫자 구별 정규식
const numberRegex = /^[0-9]$/;

// 화면에 숫자 또는 연산자 추가 함수
function appendToScreen(value) {
    screen.value += value;
}

// 화면 초기화 함수
function clearScreen() {
    screen.value = "";
}

// 연산 수행 함수
const calculate = (operator, numbers) => {
    // 구조분해 할당
    // ex) const [num1, num2] = [10, 20] -> num1 = 10, num2 = 10 선언과 동일
    // 배열의 순서대로 값이 할당됨
    const [num1, num2] = numbers.map(Number);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "ERR : 0 div";
        default:
            return "";
    }
}

// 버튼 클릭시 연산자와 숫자만 창에 나오도록 검증
const handleBtnClick = (event) => {
    event.preventDefault(); // 새로고침 방지
    const buttonText = event.target.innerText;
    
    if(numberRegex.test(buttonText)) {
        appendToScreen(buttonText);
    }

    if(operatorRegex.test(buttonText)) {
        appendToScreen(buttonText);
    }
}

// 버튼 클릭 이벤트 리스너
const buttonsListenerInit = () => {
    buttons.forEach(
        (button) => {
            button.addEventListener("click", handleBtnClick);
        }
    )
}
// 한번 더 감싼 이유 -> forEach는 undefiend를 반환..

const handleResultClick = (event) => {
    const screenValue = screen.value;
         
    if(screenValue.includes("+")) {
        screen.value = calculate("+", screenValue.split("+"));
    } else if(screenValue.includes("-")) {
        screen.value = calculate("-", screenValue.split("-"));
    } else if(screenValue.includes("*")) {
        screen.value = calculate("*", screenValue.split("*"));
    } else if(screenValue.includes("/")) {
        screen.value = calculate("/", screenValue.split("/"));
    }
}

const handleResetBtnClick = (event) => {
    clearScreen();
}

// 결과 버튼 클릭 이벤트 리스너
const resultBtnListenerInit = (button) => {
   button.addEventListener("click", handleResultClick);
}

// 리셋 버튼 클릭 이벤트 리스너
const resetBtnListenerInit = (button) => {
   button.addEventListener("click", handleResetBtnClick);
}

buttonsListenerInit();
resultBtnListenerInit(resultButton);
resetBtnListenerInit(resetButton);
