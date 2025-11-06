/*
- let, const, var
    - let → 변수
    - const → 상수
    - var → 현업 사용 지양, JS상 문법적 오류가 잔존함
    - JS는 기본적으로 동적타이핑으로 자료형이 동적으로 지정됨
*/

/*
- 자료형
    - 원시 타입
        - number, string, boolean, undefined, null
            - 이 중 undefined는 데이터 공간만 만들고 미지정 시
            - 의도적으로 값이 없음을 표현할 때 null
    - 참조타입
        - object (객체)
            - 데이터를 저장시 Key, Value로 저장함
            
            ```jsx
            let obj = {name : "YJ", age : 30};
            ```
            
        - Array
            - 데이터를 저장시 순서가 있는 데이터 집합으로 저장
            
            ```jsx
            let arr = [1,2,3,4,"YJ"];
            ```
            
        - Map
            - 데이터를 저장시 Key, Value로 저장함
            
            ```jsx
            let map = new Map();
            map.set(true, "true"); // 어떤 타입이던 Key, Value 지정 가능
            ```
            
        - Set
            - 데이터를 저장시킬 때 고유한 값만 저장
            
            ```jsx
            let set = new Set([1,2,3,3]);
            ```
            
        - Set의 내역을 Array로
            
            ```jsx
            let setToArray = Array.from(set);
            console.log(setToArray[1]); // -> 2
            ```
*/