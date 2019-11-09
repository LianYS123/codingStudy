import React,{Component} from 'react';
import Pagination from './components/Pagination'
import {BrowserRouter as Router,Route,withRouter,Link} from 'react-router-dom'
import PagPages from './pages/PagPages'

class App extends Component {
  constructor(...args){
    super(...args)
    this.state = {
      curr : 1,
      count : 10,
    }
  }
  render(){
    let self = this
    let pageOptions = {
      count:this.state.count,
      curr:this.state.count.curr,
      callback:async function(page,e){
        e.preventDefault()
        if(page == self.state.curr) return;
        self.props.history.push(`/page/${page}`) //先控制路由跳转，这样当组件state更新时会加载新的路由内容
        self.setState({
          curr:page
        })
      }
    }
    return (
      <div style={{position:'relative'}}>
        <Router key={this.state.curr}>
          <Route path={`/page/:curr`} component={PagPages} exact></Route>
          <Route path={`/`} component={PagPages} exact></Route>
          <Pagination options={pageOptions} key={this.state.curr}></Pagination>
        </Router>
      </div>
    );
  }
}

export default withRouter(App)
