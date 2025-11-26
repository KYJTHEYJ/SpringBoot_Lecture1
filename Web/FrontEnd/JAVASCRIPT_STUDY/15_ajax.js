// Jquery의 ajax
// Jquery -> JS를 쉽게 쓸수 있는 도구 모음
// 2000년 초반에는 브라우저마다 JS 사용 환경이 달라 사용법이 달랐음
// 이렇기에 통합시킨 방법이 필요했기 때문에 사용했음

// ajax
// 비동기 자바스크립트와 xml
// 페이지를 새로고침 하지 않고 서버와 데이터를 주고 받는 기술
// 이 부분만은 아직까지 많이 사용하므로.. 알아둘 것

// old ajax
$.ajax({
    url: "localhost:8080"
    , type: "GET"
    , dataType: "json"
    , success: function (response) {
        console.log("성공");
        console.log("data: " + response);
    }
    , error: function (error) {
        console.log("실패");
        console.log(error);
    }
});

// promise ajax
$.ajax({
    url: "localhost:8080"
    , type: "GET"
    , dataType: "json"
})
    .done(function (response) {
        console.log("성공");
        console.log("data: " + response);
    }
    )
    .fail(function (error) {
        console.log("실패");
        console.log(error);
    }
    )

// 템플릿
// ===== 옵션 스타일 =====
$.ajax({
  url: '/api/users',
  success: function() { },  // 성공
  error: function() { },    // 실패
  complete: function() { }  // 항상
});


// ===== 체이닝 스타일 =====
$.ajax({ url: '/api/users' })
  .done(function() { })     // 성공 (= success)
  .fail(function() { })     // 실패 (= error)
  .always(function() { });  // 항상 (= complete)    

