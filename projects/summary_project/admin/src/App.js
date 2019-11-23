import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/Login'
import Index from './pages/Index'

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Index}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App