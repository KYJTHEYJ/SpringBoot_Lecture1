// GET API
async function fetchTest(url) {
    try {
        const fetchResponse = await fetch(url);

        if(!fetchResponse.ok) {
            throw new Error(`"통신 실패! ${fetchResponse.status}"`)
        }

        const fetchBodyJson = await fetchResponse.json();
        //console.log(fetchBodyJson);
        return fetchBodyJson;
    } catch(error) {
        console.log(error, error.message);
    }
}

console.log(fetchTest("https://jsonplaceholder.typicode.com/users"));
//fetchTest("https://jsonplaceholder.typicode.com/users");

// 지금 위 처럼 하면 주석부분의 결과와 달리 코드의 결과가 나오지 않음
// 문제의 원인은 사실 async를 사용하게 되면 아래와 같이 사실 동작하고 있음
async function test() {
    return "안녕";
}

// 사실 이렇게 동작
function test() {
    return Promise.resolve("안녕");
}

// -> async는 항상 promise 형을 반환함을 유의
fetchTest("https://jsonplaceholder.typicode.com/users")
.then(result => console.log(result))
.catch(error => console.log(error));
// 이제야 정상으로 나옴