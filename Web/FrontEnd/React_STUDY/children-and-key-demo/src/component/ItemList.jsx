import { useState } from "react"

function ItemList() {
    const [items, setItems] = useState(['사과','바나나','포도']);
    const addItem = () => {
        const newItem = prompt("추가할 과일을 입력하세요");
        // prompt -> 다이얼로그를 띄워서 값을 입력받음
        if(newItem) {
            setItems([...items, newItem]);
            // ... -> 가변변수
        }
    }

    return (
        <div>
            <h3>과일 리스트</h3>
            {/*과일 목록을 나열할 것*/}
            {/*React에서 li는 중복되지 않는 키를 지녀야함*/}
            <ul>
                {/*화살표 함수가 () => () 의 형태일 때는 바로 return 됨, 뒤 함수 서술이 {}로 되어있으면 return 필요*/}
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button onClick={addItem}>
                과일 추가
            </button>
        </div>
    )
}

export default ItemList