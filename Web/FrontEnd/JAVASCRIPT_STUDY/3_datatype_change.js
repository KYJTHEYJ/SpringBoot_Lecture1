// 데이터 타입 -> 원시 타입 내 형변환 과정
// 원시 타입내 자료형들은 각각의 크기가 다르다
// Boolean, Number, String 순인데, 이 순으로는 자동 형변환이 된다
// 각각 1, 64, 한 문자열당 16Bit의 크기를 차지한다

console.log("my name is yj " + 2025);
// 이 경우 자동 형변환이 되어 자동으로 크기가 확장된다 (작은 크기에서 큰 크기의 타입으로 형변환)
// 전체가 문자열로 형변환이 된다

console.log("is it good? " + true);
// 이 경우에도 Boolean 형이 String으로 자동 형변환이 된다

// 이제 명시적으로 형변환을 하는 경우는 반대이다
// 큰 크기의 데이터 타입을 작은 크기로 축소시키는 것

// String 에서 Number 로 명시하여 형변환을 해보자
// 물론 숫자로 인식할 수 없는 문자열을 넣어버리면 NaN이 나오니 주의
console.log(Number("9999.9"));

// Boolean으로 형변환
console.log(Boolean("y"));
// 이 부분은 1, 0 은 true, false로 인식하고 나머지 전체 문자는 true로 인식한다

//--------------------------------

// 사실 형변환이 자바스크립트 쪽에서 상당히 난해한 것으로 알고 있다
// 이 부분은 추후에 정리 다시 해보려한다

// String 형 변환을 원하면 String() 함수를 사용하거나
// 템플릿 리터럴 `${1234}` 같은 backtick 형태를 주로 사용하는 것으로 알고 있다
let number1 = 12345n;
console.log(`${number1}`);

// Number 형 변환을 원하면 Number() 함수를 사용하거나
// 간결한 변환은 +, 일부 변환은 parseIn() 같은 형태로 사용하는 것으로 알고 있다
let thisisNum = "10.1010";
console.log(+"abcd"); // -> NaN
console.log(+thisisNum);
// NaN, 유한 수 검증은 .isNaN() or .isFinite()

// Boolean 형 변환은 Boolean() 함수를 사용하거나
// !! 연산자를 이용하는 것으로 알고 있다 (! 연산 후에 결과를 다시 !로 뒤집어 나타내는 것)
let anyway_thisisTrue = "whatever";
console.log(!!anyway_thisisTrue);

// Object 형 변환은 원시 -> 참조, 참조 -> 원시 이 두가지로 나누어서 적어보려한다
// 먼저 원시형을 객체로 다루는 순간은 다음과 같다
let str = "wow";
console.log(str.toUpperCase()); // 이 때 JS 엔진은 new String("wow") 형으로 객체를 만들고 대문자화 한다

// 명시적으로 변환하는 방법은 다음과 같다
let number100 = 100;
let object1 = Object(number100);
console.log(object1);

let object2 = new Object(number100);
console.log(object2);

// 아래는 Number 객체는 아니고 일반 객체로 선언되는데, 이를 자주 쓰는 것으로 보인다 ***
let object3 = { value: number100 };
console.log(object3);

// 참조형을 이제 원시형으로 다루는 것은 다음과 같다
// toString(), valueOf() 를 호출한다 (각각 문자, 되도록 숫자를 반환하는 것이 권장되는 숫자형 변환)
const objects = {
    valueOf() {return 31; }, toString() {return "custom";}
};

console.log(`${objects}`); // custom
console.log(+objects); // 31

// Json 형 형변환 **
// 응답 JSON을 객체로
const response = '{"id":1,"price":2500}';
const data = JSON.parse(response); // { id: 1, price: 2500 }

// 직렬화를 통해 JSON으로
const datas = {keydata : 112233, cost : 999};
const jsonDatas = JSON.stringify(datas);
console.log(jsonDatas);
