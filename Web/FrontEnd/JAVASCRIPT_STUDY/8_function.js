// 함수
// 작성한 코드의 일부를 뽑아와 묶은 후 특별한 의미를 부여하여 정의, 호출하고자 함이 목적

function forState() {
    for (let index = 0; index < 100; index++) {
        console.log(index)
    }
}

// forState();

// 정의는 function 함수명(매개변수){}
// 호출은 함수명();

// 콜백함수 -> 비동기 처리에 많이 쓰임
// 다른 함수의 매개변수로 전달 되는 함수
function processInput(callback) {
    let name = "yj";
    callback(name);
}

function greet(name) {
    console.log(`hello ${name}`);
}

processInput(greet);

// 콜백함수 사용 예시
// setTimeout()은 몇 초후 특정 함수를 실행할 때 이용하는 코드
//setTimeout(() => {console.log("3초 후 실행")}, 3000);

//------------------------------------

// ES6 엔진에서만 사용 가능
// 매개변수에 기본값 부여 가능
function forEs6Function(value = {}) {
    for (let index2 = 0; index2 < value; index2++) {
        console.log(index2);
    }
}

forEs6Function();

// 표현식으로 사용되므로 할당 가능
let show = forEs6Function();

// 람다식 함수는 기존에도 사용 가능 했지만
let show2 = function (value = {}) {
    for (let index2 = 0; index2 < value; index2++) {
        console.log(index2);
    }
}

// 화살표 함수로 대체 되었다 **
let value = 10;
let show3 = (max) => {
    for (let index3 = 0; index3 < max; index3++) {
        console.log(index3);
    }
}

show3(value);

// 객체를 반환시에 화살표 함수의 주의 점은 괄호로 감싸야함
// 화살표 함수는 값의 할당이 실행 시점에 결정되므로 코드의 순서에 따라 호이스팅 문제 (코드 미선언으로 간주되는)
// 문제가 발생할 수 있으니 주의! ****
const obj1 = () => ({name: "YJ"});
console.log(obj1); // 객체 반환이 안되고 그냥 변수가 객체를 참조한다는 [Function: obj1] 구문 출력
console.log(obj1()); // 객체가 반환됨

// this 바인딩
// 함수의 형태에 따라 달라짐
// 함수의 형태 : function, 화살표 함수
const person = {
    name: "kyj1"
    , age: 31
    , sayHello: function () {
        console.log(this.name); // 이 때 this는 가장 가까운 변수를 찾음 // kyj1
    }
}

person.sayHello();

// 화살표 함수는 this를 사용할 의도로 만들어 진 것이 아님
const person2 = {
    name: "kyj2"
    , age : 31
    , sayHello: () => {
        console.log(this.name); // 이 때는 this가 선언된 부분의 전역을 찾음 // name이 없어 undefined
    }
}

// 바로 이 부분의 this, 즉 전역 this의 name을 찾음
this.name = "what?";
person2.sayHello();


