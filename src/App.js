import React from 'react'
import BucketList from './BucketList';
import styled from "styled-components"
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import Detail from './Detail';
import NotFound from './NotFound'

import {connect} from "react-redux";
import {loadBucket, createBucket} from "./redux/modules/bucket"

const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list}
}
const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucket)
    },
    create: (bucket)=> {
      dispatch(createBucket(bucket));
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      // list: ["영화 보기","친구 만나기","운동하기"],
    }
    this.text = React.createRef();    
    // current 라는 (오브젝트)값으로 받아오는 것을 알 수 있다.
  }

  addList = () => {
    // let list = this.state.list;
    const new_item = this.text.current.value;
        // input 으로부터 current(오브젝트)에서 value 값을 읽어낸다.
    this.props.create(new_item)
    // this.setState({list: [...list, new_item]})
        // setState()는 this.state 의 업데이트 값(오브젝트)으로 지정한다.
    this.text.current.value=""
  }

  componentDidMount () {
    console.log(this.props)
  }

  render() {        
    return (
      <div className="App">
        <Container>
          <Title>버킷 리스트</Title>
          <Line/>
        <Switch>
          {/* 잘못된 주소 처리할 때 Switch */}
          <Route 
            exact 
            path="/"           
            render={(props)=> (
              
              <BucketList 
                list={this.props.bucket_list}
                history={this.props.history} />
                
              ) }/>
          
          <Route path="/detail/:index" component={Detail}/>
          <Route render={(props) => (<NotFound history={props.history} /> ) } />
        
          {/* render로 넘기면 history 가 넘어가지 않음, component 로 넘기면 자동으로 브라우저 히스토리가 전달됨 */}
        
        </Switch>

        </Container> 
        <Container minHeight={"5vh"}>
          <Input type="text" ref={this.text}/>
          <button onClick={this.addList}>Add List</button>
        </Container> 
      </div>
    )
  }
}

const Container = styled.div`    
  max-width: 450px;
  min-height: ${(props)=>(props.minHeight? props.minHeight : "30vh")};
  background-color: #fff;
  padding: 35px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid #ddd;
`;
const Input = styled.input`
  padding:10px;
  margin:5px;
  border:none;
  outline:none;
  background-color:#f2f2f2;
  border-radius:15px;  
`
const Title = styled.h1`
  color: slateblue;
  text-align:center;
`;

const Line = styled.hr`
  margin:16px 0px;
  border: 1px dotted #ddd
`

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
