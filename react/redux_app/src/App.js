import React,{Component} from 'react';
import {connect} from 'react-redux'
import {SET_NAME,SET_AGE} from './actions'

class App extends Component{
  constructor(...args){
    super(...args)
  }
  fn(){
    this.props.setName('zhangsan')
  }
  fn2(){
    this.props.setAge(this.props.user.age + 1)
  }
  render(){
    return (
      <div>
        {this.props.a} <br/>
        {/* 注意：不要写成params */}
        name:{this.props.user.name} <br/>
        age:{this.props.user.age}
        <br/>
        company name: {this.props.company.name} <br/>
        company age: {this.props.company.age}
        <br/>
        <button onClick={this.fn.bind(this)}>change name</button>
        <button onClick={this.fn2.bind(this)}>age ++</button>

      </div>
    )
  }
}

export default connect(function(state,props){
  //console.log(state); 如果reducer用combineReducers()处理过，这里是一个json，里面有两个reducer
  
  return {
    ...state,
    ...props
  };
},{
  setName(name){
    return { //返回的数据为action，被reducer处理
      type:SET_NAME,  //触发所有reducer的type为SET_NAME的action
      name
    }
  },
  setAge(age){
    return {
      type:SET_AGE,
      age
    }
  }
})(App);
