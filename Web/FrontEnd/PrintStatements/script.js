//import axios from 'axios';

const quoteContainer = document.getElementById("quoteContainer");
const currentQuote = document.querySelector("#quote");
const loadingSpinner = document.getElementById("loader");
const favoriteQuoteList = document.getElementById("quotePickList");
const nextQuoteButton = document.getElementById("nextQuote");
const saveQuoteButton = document.getElementById("selectQuote");

let currentQuoteText = "";
let isQuoteSaved = false;

// axios
const axiosHttpClient = axios.create({
    baseURL: 'https://korean-advice-open-api.vercel.app/api',
    headers: {
        "Content-Type": "application/json"
    }
});

// 로딩
function showLoadingSpinner() {
    loadingSpinner.style.display = "block";
    quoteContainer.style.display = "none";
}

// 로딩 애니메이션 숨기기
function hideLoadingSpinner() {
    loadingSpinner.style.display = "none";
    quoteContainer.style.display = "block";
}

// 한국어 명언 API 연결
//https://korean-advice-open-api.vercel.app/api/advice
async function fetchKoreanQuotes() {
    showLoadingSpinner();

    try {
        // fetch
        //const response = await fetch("https://korean-advice-open-api.vercel.app/api/advice");
        const response = await axiosHttpClient.get("/advice");

        // fetch
        //if (!response.ok) {
        //    throw new Error(`"${response.status} : connected Error, check for your Service"`);
        //}

        // fetch
        //const resultData = await response.json();
        //const resultQuote = `${resultData.message}\n- ${resultData.author}`;
        const resultQuote = `${response.data.message}\n- ${response.data.author}`;
        currentQuote.innerHTML = resultQuote.replace(/\n/g, '<br>');

        // 웹 브라우저의 일정 저장소에 저장시키는 브라우저
        // 웹 브라우저를 종료해도 데이터는 삭제되지 않음!
        localStorage.setItem("currentQuote", resultQuote);

        hideLoadingSpinner();
        isQuoteSaved = false;
    } catch (error) {
        console.error(error, error.message);
        currentQuote.innerText = "오류로 인해 명언을 가져올 수 없습니다! 다시 시도해주세요!"
    }
}

// 부가적 설명..
// content에 값을 넣으려할 때 innerHTML, innerText, value 3개가 번갈아 쓰임
// innerText -> 텍스트만 표시 할 때
// innerHTML -> html 태그가 포함되어 표시할 때 -> 사용자의 입력값에는 절대 사용 금지 (스크립트가 실행될 수도 있음)
// value -> 입력값에서만 사용 (input 전용)

nextQuoteButton.addEventListener("click", fetchKoreanQuotes);
saveQuoteButton.addEventListener("click", saveQuotes);

// 명언 즐겨찾기 저장
function saveQuotes() {
    const storedQuote = localStorage.getItem("currentQuote");

    // 로컬 스토리지에 있는 경우 + 이미 저장되지 않은 경우
    if (isQuoteSaved == false && storedQuote !== null && isQuoteAlreadySaved(storedQuote) == false) {
        // li 태그를 생성한 객체를 listItem에 저장
        const listItem = document.createElement("li");
        listItem.innerText = storedQuote;
        favoriteQuoteList.append(listItem);
        isQuoteSaved = true;
    } else if(isQuoteSaved == true) {
        alert("이미 저장된 명언입니다!")
    } else {
        alert("이미 즐겨찾기에 있는 명언입니다!");
    }
}

// 기저장 명언 검사
function isQuoteAlreadySaved(quote) {
    const quoteListItems = favoriteQuoteList.getElementsByTagName("li");

    // 구조 객체의 값을 순회하는 for of
    for(const item of quoteListItems) {
        if(quote == item.innerText) {
            return true;
        }
    }

    return false;
}

// localStorage 에 저장했던 명언을 불러와 세팅하기
function loadSavedQuote() {
    const storedQuote = localStorage.getItem("currentQuote");

}

fetchKoreanQuotes();