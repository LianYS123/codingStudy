import React,{Component} from 'react';
import Pagination from './components/Pagination'
import {BrowserRouter as Router,Route,withRouter} from 'react-router-dom'
import PagPages from './pages/PagPages'
import {SET_COUNT,SET_CURR} from './actions'
import datalib from './libs/datalibs'
import {connect} from 'react-redux'

class App extends Component {
  async componentDidMount(){
    this.setState({curr:this.props.curr})
    try{
      let count = await datalib.get('api/pagecount/10')
      this.props.setCount(count)
    } catch(e){
      alert('error')
      console.log(e)
    }
  }
  render(){
    let self = this
    let curr = this.props.curr || 1
    let count = this.props.count
    let pageOptions = {
      count,
      curr,
      callback: function(page,e){
        e.preventDefault()
        if(page === curr) return;
        self.props.history.push(`/page/${page}`) //先控制路由跳转，这样当组件state更新时会加载新的路由内容
        self.props.setCurr(page)
      }
    }
    return (
      <div style={{position:'relative'}}>
        <Router key={curr}>
          <Route path={`/page/:curr`} component={PagPages} exact></Route>
          <Route path={`/`} component={PagPages} exact></Route>
          <Pagination options={pageOptions} key={curr}></Pagination>
        </Router>
      </div>
    );
  }
}

export default connect(
  function(state,props){
    return {
      ...state,
      ...props
    }
  },{
    setCount(count){
      return {
        type: SET_COUNT,
        count
      }
    },
    setCurr(curr){
      return {
        type: SET_CURR,
        curr
      }
    }
  }
)(withRouter(App));