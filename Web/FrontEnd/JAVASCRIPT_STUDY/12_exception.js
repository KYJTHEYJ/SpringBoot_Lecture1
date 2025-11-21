// 예외처리
// 특정 코드 부분에 에러가 발생 할 경우 예외처리 구문을 통해 제어 가능
// 구조는 자바와 동일

try {
    // 예상되는 에러 발생 구간
    let result = undefined;
    console.log(result.toUpperCase());
} catch(error) {
    // 에러 발생시 대처 코드
    console.log("error 발생 : ", error.message);
} finally {
    console.log("종료");
}