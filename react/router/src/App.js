import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import News from './components/News'
import User from './components/User'

class App extends Component{
  constructor(...args){
    super(...args)
  }
  render(){
    return (
      <Router>
          <h1>首页</h1>
          <Link to="/">首页</Link>
          <Link to="/news">新闻</Link>
          <Link to="/user">用户</Link>

          {/* exact 不向后匹配 */}
          <Route path="/news" exact component={News}></Route> 
          <Route path="/user" component={User}></Route>
      </Router>
    )
  }
}

export default App
