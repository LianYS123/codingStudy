import React,{Component} from 'react';

class App extends Component{
  constructor(...args){
    super(...args)
    this.state = {
      //如果后面要用到state，必须初始化
    }
  }
  async componentDidMount(){
    try{
      let res = await fetch('data/1.json')
      
      let {username,password} = await res.json();
      
      this.setState({
        username,
        password
      })
      
    }catch(e){
      alert('读取数据失败')
      console.log(e);
    }
  }
  render(){
    return (
      <div>
        app:
        <br/>
        username:{this.state.username} <br/>
        password:{this.state.password}
      </div>
    )
  }
}

export default App;
