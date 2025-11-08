// 반복문도 Java와 동일하다
/*
for(초기식; 조건식; 증감식)
*/

let jediMindTricks = ["vinnie paz", "stoupe the enemy of mankind", 'DJ kwestion'];

// 향상된 for 는 for..of, for..in

// of는 iterable 구조의 객체에 값을 순회한다
// 배열이나 String, Map, Set 등의 리스트 열거에 사용
for(let member of jediMindTricks) {
    console.log(member);    
}

let jediMindTricksWithPosition
    = {
        MC : "vinnie paz"
        , Producer : "stoupe the enemy of mankind"
        , DJ : 'DJ kwestion'
    };


// in은 객체의 열거 가능한 key를 순회함 -> 주로 일반 객체에 사용
// 여기서 점 표기법은 통하지 않음 -> 점 표기법은 객체에 적힌 이름의 속성이 있는지 찾는 것
// 대괄호 표기법을 사용해서 key 안에 해당 문자열로 된 이름의 속성이 있는지 찾게 해야함 **
for(let member2 in jediMindTricksWithPosition) {
    console.log(
        `${member2} : ${jediMindTricksWithPosition[member2]}`
    ); 
}