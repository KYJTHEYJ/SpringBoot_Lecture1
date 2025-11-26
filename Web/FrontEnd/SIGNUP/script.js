const wrapperBox = document.getElementById("wrapper");
const inputGroup = document.getElementsByClassName("inputGroup");
const firstInputs = document.querySelector("input");
const nickNameinput = document.getElementById("userNickName");
const userEmailinput = document.getElementById("userEmail");
const userPasswordinput = document.getElementById("userPassword");
const confirmPasswordinput = document.getElementById("confirmPassword");
const userPhoneinput = document.getElementById("userPhone");
const registrationForm = document.getElementById("registrationForm");

// updateHelperText 설계
// 입력 필드에 유효성을 체크하여 도움말을 업데이트 하도록 만들 것
// 화살표 함수를 통해서 선언 (JS에서 함수는 표현식이므로)
const updateHelperText = (input, message, isValid) => {
    const inputGroup = input.parentElement; // 가장 가까운 부모태그를 지칭 (여기선 각 input을 감싸는 div class inputGroup을 가르킬 것)
    const helperText = inputGroup.getElementsByClassName("helperText")[0];

    //유효성 검사를 통과했을 때, 실패했을 때를 나누기
    if(isValid) {
        inputGroup.classList.remove('invalid');
        inputGroup.classList.add('valid');
        helperText.style.visiblity = 'hidden';

    }

    if(!isValid) {
        inputGroup.classList.remove('valid');
        inputGroup.classList.add('invalid');
        helperText.style.visibility = 'visible';
        helperText.innerText = message;
    }
}

// 입력 필드가 비어있는지 확인하는 함수 설계
const checkedEmptyInput = (input) => {
    if(input.value.trim() === "") {
        updateHelperText(input, "값을 입력해주세요!", false);
        return false;
    } else {
        updateHelperText(input, "", true);
        return true;
    }
}

// 비밀번호 강도 체크 함수 설계
const checkPasswordStrength = (pwd) => {
    // 정규식 패턴 사용 -> 대문자, 소문자, 8자 이상 조건으로
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // test() -> 파라미터가 정규식 패턴에 성립하면 true 반환
    if(strongPattern.test(pwd)) {
        updateHelperText(userPasswordinput, "비밀번호 강도가 강해요!", true);
    } else {
        updateHelperText(userPasswordinput, "숫자, 영문 소문자, 대문자를 포함한 8자리 이상으로 입력해주세요!", false);
    }
}