import axios from 'axios'

// axios
// axios는 fetch보다 더 편리한 환경을 구성해줌
// 자동 JSON 변환, 자동 에러 throw, 요청과 응답의 가로채기 등에서 더 나은 환경을 제공

//POST API
async function fetchTestPost() {
    try {
        const fetchTest = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: 'testTitle',
                body: 'testBody',
                userId: 1
            })
        });

        if(!fetchTest.ok) {
            throw new Error(`"TEST ERROR : ${fetchTest.status}"`)
        }

        const result = await fetchTest.json();
        console.log(result);
    } catch(error) {
        console.log("error : ", error.message);
    }
}

//fetchTestPost();

// POST API
async function axiosPostTest() {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: 'testTitle',
            body: 'testBody',
            userId: 1
        });
        console.log(response.data);
    } catch (error) {
        console.log("error : ", error.message);
    }
}

axiosPostTest();

// 같은 POST 환경 전송을 놓고 비교
// fetch의 경우
// - method 선언 및 헤더 등의 선언 필요
// - JSON 변환이 필수적으로 필요
// - 에러처리의 경우에도 직접 선언해주어야함

// axios의 경우
// - 각각의 CRUD에 맞춘 함수 내포
// - JSON 변환, 에러처리가 내포
// - 강력한 편의성