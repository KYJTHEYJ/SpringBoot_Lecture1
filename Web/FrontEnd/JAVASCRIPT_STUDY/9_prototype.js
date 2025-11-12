// 프로토타입 정의 및 CRUD
// toString() 처럼 미리 정의된 속성과 함수가 있는데
// 이러한 속성과 함수를 저장하는 특별한 공간을 프로토타입 이라고 한다

// 이러한 프로토타입에 CRUD를 더해 JS에서 사용한다
// 프로토타입에 새로운 속성이나 메소드 추가
// 프로토타입에 저장된 데이터를 조회
// 기존에 추가한 데이터, 메서드를 수정, 삭제 (UD는 거의 하지 않는다)

// JS에서 함수는 단순 문법이 아니라 Function 이라는 객체에서 제공되는 기능
// Function 객체는 함수 외에도 다양한 속성과 메서드를 지닌다
// 모든 함수는 Function 객체를 상속받고 있다 -> Function 객체의 속성과 메서드를 재사용

// Function.prototype -> 이 자체가 한 묶음이라 보는게 낫다

// JS의 최상위 객체는 Object
// Object 객체도 한 묶음으로 Object.prototype 이라고 표현한다
// Object 객체는 Function 객체를 포함하고 있으며, Function 객체는 모든 함수의 부모 역할을 한다
// 또한 모든 객체, 함수는 Object.prototype 으로 부터 기능을 상속받는다

// 프로토타입의 데이터를 추가, 조회하는 법
// 생성의 첫번째 방법
// 프로토타입을 추가하는 것 -> 사실상 새로운 객체를 생성하는 것
// 프로토타입이라는 바구니에 {key:value}로 데이터를 저장하는 것
const animal = {
    sound: () => {
        console.log("소리 내기");
    }
}

const dog = Object.create(animal); // 이는 사실상 오브젝트 객체를 생성한 것이랑 동일
// Object.create(데이터) -> 새로운 객체를 생성 -> 객체의 프로토타입을 명시적으로 설정
dog.sound();

// 생성의 두번째 방법 -> Object.prototype.이름 = 속성 정의
// Object는 모든 자바스크립트 코드에 조상 -> 모든 객체에 사용 가능해진 sayHello
Object.prototype.sayHello = (value) => {
    console.log(`${value} 안녕`);
}

// 필요한 객체끼리 기능을 공유하게 만들어야함
const person = {name: "yj"};
person.sayHello(person.name);

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`${this.name} 안녕`);
    }
}

const person2 = new Person("yj");
person2.sayHello();

// 프로토타입을 공유하는 방법
const greeter = {
    sayHello() {
        console.log(`${this.name} 안녕`);
    }
};

const person3 = Object.create(greeter);
person.name = "yj";

person.sayHello(); // yj 안녕

// 조회의 첫번째 방법
// 프로토타입 바구니에서 sayHello 라고 만든 함수 코드를 조회할 것임
// Object.getPrototypeOf(); 키워드 사용
console.log(Object.getPrototypeOf(sayHello)); // Function.prototype 이라는 Function 객체임을 반환
