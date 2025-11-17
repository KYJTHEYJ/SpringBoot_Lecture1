// 얕은 복사 (참조) -> 깊은 복사
// 외부 라이브러리 (lodash) 사용
// JSON.parse(JSON.stringfy()) 사용

const lodash = require('lodash');

const originalObj = {name: "yj"
    , age : 33
    , adress : {
        city: "ss",
        country: "fkr"
    }
}

// 참조 -> 일반적으로는 얕은 복사, 라이브러리를 통한 깊은 복사 사용법

const shallowedObj = originalObj; // 얕은 복사
const clonedObj = lodash.cloneDeep(originalObj); // lodash 라이브러리를 통해 깊은 복사

shallowedObj.adress.city = "seoul";
console.log(originalObj.adress);