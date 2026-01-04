// 배열
// 여러 데이터 타입을 가진 여러 종류의 값을 한번에 저장하는 데이터 구조
// -> JS에서는

// 선언법
// - 대괄호
let fruit = ["사과", "바나나"];

// - Array 객체를 가져와 사용
// 만들어진 Array 객체를 가져와서 메모리영역에 저장
let number = new Array(1,2,3);

// - 빈 배열 선언
let emptyArray = [];

// 배열의 특징
// - 순서가 있다
// 배열의 요소는 0부터 시작하는 인덱스로 접근
// - 다양한 데이터 타입을 한번에 작성 가능

// 배열과 객체는 참조타입 (스택엔 주소, 힙엔 값이 저장됨)
// 배열은 순서가 있기 때문에 맨 앞, 맨 끝에만 데이터를 추가하거나 삭제가 논리적으로 가능

// 배열은 논리적 개념이 있어, CRUD 가능
// READ = fruit[1];
// UPDATE = fruit[1] = "수박"
// CREATE = .push, .unshift 등..
// DELETE = .pop(), .shift() 등..

// 배열관련 함수
let numbers = [1,2,3,4,5];
let doublenumbers = numbers.map(number => number * 2); // 스트림의 map 처럼 인자들 제어 가능
let evennumbers = numbers.filter(number => number % 2 == 0); // 스트림의 filter 처럼 중간 연산