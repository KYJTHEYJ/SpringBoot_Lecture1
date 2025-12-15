// Props -> 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터 전달 방법, 중간에 갖고 있는 역할을 함
function GreetingCard(props) {
    return ( 
        <div className="card">
            {
                props.message ? (<p>{props.message}</p>) : (<p>인사말이 여기에 표시됩니다.</p>)
                // props 안에 message 라는 변수 속 데이터가 존재하면!
            }
        </div>
    )
}

export default GreetingCard