import { useEffect, useState } from 'react'
import './App.css'
import GreetingCard from './component/GreetingCard.jsx'
import ItemList from './component/ItemList.jsx';

// 한번에 하나의 컴포넌트가 있어야 올바른 Jsx
function App() {
  // 리액트 컴포넌트의 상태 관리 공간인 배열 형태로 [초기 상태를 볼 수 있는 변수, 바꾸는 함수]를 저장하고
  // useState(처음 값) 형식의 메서드를 통해 상태관리 공간을 관리함, 이를 Hook 이라고 부름
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [loaded, setLoaded] = useState(false);

  // useEffect(기능 설계 함수, [변수])
  // 배열 속 변수 안의 데이터가 변경 되면 인지하여 첫번째 인자로 선언한 기능 설계 함수를 실행하는 기능을 수행함
  // 배열을 빈 값으로 선언시 처음 렌더링 할 때 한번은 무조건 실행하므로 딱 한번 실행을 감지하여 수행하고 아무 동작을 안하는 함수가 됨
  // 아무것도 선언안 하면 감지 대상이 없어 항상 true 상태의 반복문 같이 뭐든 감지하여 실행해버림
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000)
  }, []);

  // useState -> 데이터를 저장하고 바꾸는 역할
  // 화면에 보여주는 데이터, 입력값, 토글, 등..에 주로 쓰임
  // useEffect -> 특정 시점에 뭔가를 실행하는 역할
  // API 호출 용도, 타이머, 이벤트 리스너 등록, localstorage에 저장 용도 등..에 주로 쓰임

  // input 될 때마다 name 이 변경 되도록 하기
  const handleInputChange = (e) => {
    return setName(e.target.value);
  }

  // 버튼을 누르면 인사말 변경하기
  function handleGreetingClick(e) {
    return setGreeting(`${name} 님, 반갑습니다`);
  }

  return (
      <div className='App'>
        <h1>나의 리액트 컴포넌트</h1>
        {/*JS 코드를 사용하려면 {} 중괄호 사용 */}

        {!loaded ? (
          <p>Loading...</p>
        ) : (
          <div>
          <input type="text" placeholder="이름을 입력하세요" value={name} onChange={handleInputChange} />      
          <button onClick={handleGreetingClick}>인사하기</button>
          <GreetingCard message={greeting} />
          {/*html 태그처럼 만든 GreetingCard Component */}
          {/*
            GreetingCard는 데이터를 저장할 수 있는 리액트 컴포넌트 역할의 공간
            이 때 저장되는 변수는 JS 객체로, key가 Message, value가 greeting이라 가정해보자
            props 를 통해 GreetingCard 안에 Props 공간 안에 message 변수 속 greeting 데이터를 가짐
          */}

          <ItemList />
          </div>
        )}
      </div>
  )
}

export default App