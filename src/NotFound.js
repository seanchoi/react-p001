import React from 'react';

const NotFound = (props) => {
    console.log(props)
    // 히스토리가 잘 넘어왔는지 확인
    return (
        <div>
            <h1>페이지가 없습니다</h1>
            <button onClick={()=> {
                props.history.goBack()
            }}>뒤로가기</button>
        </div>
    )
}

export default NotFound