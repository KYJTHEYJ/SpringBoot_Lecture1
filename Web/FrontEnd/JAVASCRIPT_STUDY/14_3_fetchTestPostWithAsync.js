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
        console.log(error, error.message);
    }
}

fetchTestPost();