const wrapperBox = document.getElementById("wrapper");
const inputGroup = document.getElementsByClassName("inputGroup");
const firstInputs = document.querySelector("input");
const userNickNameinput = document.getElementById("userNickName");
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
        helperText.style.visibility = 'hidden';
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
const checkPasswordStrength = (pwdInput) => {
    // 정규식 패턴 사용 -> 대문자, 소문자, 8자 이상 조건으로
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // test() -> 파라미터가 정규식 패턴에 성립하면 true 반환
    if(strongPattern.test(pwdInput.value)) {
        updateHelperText(pwdInput, "", true);
        return true;
    } else {
        updateHelperText(pwdInput, "숫자, 영문 소,대문자를 포함 8자리 이상으로 입력해주세요!", false);
        return false;
    }
}

// 비밀번호와 확인 비밀번호 체크 함수 설계

const checkPwdMatch = (pwdInput, confirmPwdInput) => {
    if(pwdInput.value === confirmPwdInput.value) {
        updateHelperText(confirmPwdInput, "", true);
        return true;
    } else {
        updateHelperText(confirmPwdInput, "입력한 비밀번호와 일치하지 않아요!", false);
        return false;
    }
}

// 이메일 형식 확인 함수
const checkEmailFormat = (emailInput) => {
    // 정규식 패턴 사용
    const validPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // test() -> 파라미터가 정규식 패턴에 성립하면 true 반환
    if(validPattern.test(emailInput.value)) {
        updateHelperText(emailInput, "", true);
        return true;
    } else {
        updateHelperText(emailInput, "올바른 이메일을 입력해주세요!", false);
        return false;
    }
}    

// 전화번호 형식 확인 함수
const checkPhoneformat = (phoneInput) => {
    // 정규식 패턴 사용 -> 휴대폰 입력 패턴 (숫자만)
    const validPattern = /^01[0-9]{1}-[0-9]{3,4}-[0-9]{4}$/;
    // test() -> 파라미터가 정규식 패턴에 성립하면 true 반환
    if(validPattern.test(phoneInput.value)) {
        updateHelperText(phoneInput, "", true);
        return true;
    } else {
        updateHelperText(phoneInput, "유효한 휴대폰 번호가 아니에요!", false);
        return false;
    }
}

// 모든 유효성 검사를 통과해야 제출되도록
const validAll = () => {
    const isNickNameValid = checkedEmptyInput(userNickNameinput);
    const isPhoneValid = checkPhoneformat(userPhoneinput);
    const isPwdStrength = checkPasswordStrength(userPasswordinput);
    const isConfirmPwdValid = checkPwdMatch(userPasswordinput, confirmPasswordinput);
    const isEmailValid = checkEmailFormat(userEmailinput);

    return isNickNameValid && isPhoneValid && isPwdStrength && isConfirmPwdValid && isEmailValid;
}

// Form의 submit 버튼 이벤트 리스너 추가
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 새로고침 방지

    if(validAll()) {
        console.log("모든 필드가 유효함!");
    } else {
        console.log("재입력 요구!");
    }
});

// 모든 input 태그 중 한개씩 실시간 체크
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        switch(input.id) {
            case "userNickName" :
                checkedEmptyInput(input);
                break;
            case "userEmail" :
                checkEmailFormat(input);
                break;
            case "userPassword" :
                checkPasswordStrength(input);
                break;
            case "confirmPassword" :
                checkPwdMatch(userPasswordinput, confirmPasswordinput);
                break;
            case "userPhone" :
                checkPhoneformat(input);
                break;
        }
    })
});
