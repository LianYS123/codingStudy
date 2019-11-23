import React,{Component} from 'react';
import {withRouter,BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import PagPages from './PagPages'
import Pagination from '../components/Pagination'
import {SET_COUNT,SET_CURR} from '../actions'
import datalib from '../libs/datalibs'
import Modify from './Modify' 
import Add from './Add'

class Index extends Component {
  async componentDidMount(){
    this.setState({curr:this.props.curr})
    try{
      let count = await datalib.get('admin/api/pagecount/10')
      this.props.setCount(count)
    } catch(e){
      if(e == 'login') {
          this.props.history.push('/login')
      } else {
          alert('error')
          console.log(e)
      }
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
          <Link to='/add'>
              <button className="btn btn-primary">添加一本书</button>
          </Link>
          <Route path='/add' component={Add}></Route>
          <Route path='/page/:curr/modify/:id' component={Modify}></Route>
          <Switch>
            <Route path='/page/:curr' component={PagPages}></Route>
            <Route path='/' component={PagPages}></Route>
          </Switch>
          <Pagination options={pageOptions} key={curr}></Pagination>
        </Router>
      </div>
    );
  }
}

export default withRouter(connect(
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
)(Index));