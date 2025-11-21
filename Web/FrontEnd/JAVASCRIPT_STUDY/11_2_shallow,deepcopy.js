// 얕은 복사 (참조) -> 깊은 복사
// 외부 라이브러리 (lodash) 사용
// JSON.parse(JSON.stringfy()) 사용 -> 자동으로 참조타입이 깊은 복사가 됨

const lodash = require('lodash');

const originalObj = {name: "yj"
    , age : 33
    , adress : {
        city: "ss",
        country: "fkr"
    }
}

// 참조 -> 일반적으로는 얕은 복사, 라이브러리를 통한 깊은 복사 사용법
// lodash 사용
/*
// 기존 데이터에 영향
const shallowedObj = originalObj; // 얕은 복사
// 기존 데이터 영향 없음
const clonedObj = lodash.cloneDeep(originalObj); // lodash 라이브러리를 통해 깊은 복사


shallowedObj.adress.city = "seoul";
console.log(originalObj.adress);
console.log(shallowedObj.adress);
console.log(clonedObj.adress);
*/

// JSON.parse(JSON.stringify()) 사용 -> 야매 방법..
const a = {one: 1, two: 2};
const b = a; // 얕은 복사
const c = JSON.parse(JSON.stringify(a)); // 깊은 복사
//b.one = 999;
//console.log(a.one); // 얕은 복사
c.one = 222;
console.log(a.one); // 깊은 복사