import axios from 'axios';

// GET API
async function axiosGetTest() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
    } catch (error) {
        console.log("error : ", error.message);
    }
}

//axiosGetTest();

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