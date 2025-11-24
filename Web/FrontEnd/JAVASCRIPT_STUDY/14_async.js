// sync
// 자바스크립트는 순차적인 언어
// 위에서 아래로 흐르는 방향으로 코드를 작성 -> 순차적인 언어

// 동기 -> 코드가 위에서 아래로 차례대로 실행, 하나의 작업이 끝나야 다음 작업이 실행, 일반적인 실행 방식
console.log("start");
for(let i = 0; i < 100000000; i++) {};
console.log("end");

// 비동기 -> 코드 실행을 기다리지 않고 다른 작업을 먼저 실행 -> 속도가 훨씬 빠름
// 코드 실행이 오래걸리는 영역에서 실행

// 프론트, 백엔드 영역에서 데이터 주고 받을시
// 타이머 세팅
// 일정 시간이 흐른 후 실행 함수

// JS에서 비동기 문법 ***
// 콜백 -> setTimeout(실행함수, 시간)
// 프로미스 -> promise, 비동기 처리 방식으로 데이터가 언제 프론트에서 백으로 전송이 될지, 반대로 전송을 할지 짐작키 힘듬
//           그래서 나온 개념으로, 무조건 데이터는 전송하는 것을 약속, 도착을 했는지, 안했는지를 구분하는 조건을 지님
//           도착 성공 (resolve()), 도착 실패 (reject())로 실패 메세지를 남김
// async, await -> 프로미스의 진화 형태로 async, await 키워드로 데이터가 도착이 성공 했을 때 resolve 역할을 수행
//                 데이터 도착이 실패 했을 때는 try-catch문으로 표현이 가능하게 함

// call-back
// 다른 함수의 매개변수로 전달, 나중에 실행되는 함수 -> 비동기적 함수
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data load Complete!");
        callback();
    }, 1000)
}

function afterFetch() {
    console.log("Data Show");
}

//fetchData(afterFetch);

// Promise
// 나중에 값이 온다 라고 약속하는 객체 ({key : value}가 아니라 특별한 기능을 여러개의 키워드 방식으로 저장)
// 비동기 과정을 실행하고자함 
// -> 비동기 과정을 수행한다고 약속함 (Promise 객체 생성) -> resolve() 
// -> 비동기 과정이 끝나면 결과 값을 전송, 이 때 비동기 과정이 실패한다면 reject() 반환
function orderService() {
    return new Promise((resolve,reject) => {
        console.log("배달 주문 조리중");
        setTimeout(() => {
            let success = false; // 배달 주문 조리 성공, 실패 여부
            if (success) {
                resolve("배달 주문 조리 완료");
            } else {
                reject("배달 주문 조리 실패");
            }
        })
    }, 1000)
}

// Promise 함수에는 then 키워드 사용 가능 
//orderService().then(result => console.log(result))
//.catch(error => console.log(error))
//.finally(() => console.log("배달 주문 종료"));

// async
// async 를 사용시 Promise 보다 훨씬 짧은 코드로 작성이 가능함
async function orderService2() {
    return Promise.resolve("배달 주문 조리 완료!");
}

//orderService2().then(result => console.log(result));

async function orderService3() {
    try {
        throw new Error("배달 주문 조리 실패!");
    } catch(error) {
        console.log("err:", error.message);
    }
    //== return Promise.reject("배달 주문 조리 실패!");
}

//orderService3();
// == orderService3().catch(result => console.log(result));

// await
// await 키워드는 항상 async와 항상 같이 움직임
// async가 없으면 await은 없음
// async -> 동기적을 비동기로
// await -> 비동기를 동기로
// async 를 사용하면 빠른 속도로 동시다발적 코드가 비순차적으로 실행
// await 을 사용하면 특정 await 이 적용된 함수는 비순차적에서 순차적으로 코드가 실행되게끔 설정됨
async function fetchData2() {
    console.log("데이터 요청 중");
    let response = await fetch("https://206a0cfe-b224-4df0-96ed-6968248d94e1.mock.pstmn.io/test/1");
    let data = await response.json();
    // 프론트와 백엔드 데이터 교환 사이에서 사용하는 fetch
    // fetch 자체가 비동기 함수 -> 데이터를 비동기적, 비순차적으로 갖고옴

    // 여기서 await을 선언해서 async로 실행된 fetchData2 함수에서 순서를 통제 하는 것임
    // 만약 선언 안하면 async로 선언되어 fetch 가 먼저 실행될지, json 을 당겨올지 뭐가 먼저 될지 몰라 문제가 될 소지가 생김
    console.log(data.test);
}

fetchData2();