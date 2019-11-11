import React,{Component} from 'react'
import Table from '../components/Table'
import datalib from '../libs/datalibs';
import {connect} from 'react-redux'
import {SET_DATA, SET_CURR, SET_COUNT} from '../actions'
import {withRouter,BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Add from './Add'
import Modify from './Modify' 
import Dialog from '../components/Dialog'
class PagPages extends Component {
    state = {show : false}
    async componentDidMount(){
        await this.loadData()
    }
    async loadData(size=10){
        let page = this.props.match.params.curr || 1
        if(page !== this.props.curr) {
          this.props.setCurr(page)
        }
        console.log(`load data on page ${page}`);
        try{
            let data =  await datalib.get(`api/booklist/${page}/${size}`)
            this.props.setData(data)
        }
        catch(err) {
          alert('数据加载出错')
          console.error(err)
        }
    }
    render(){
        let self = this
        let fields = [
          {name:'id',text:'ID'},
          {name:'title',text:'名称'},
          {name:'author',text:'作者'},
          {name:'icon',text:'封面',icon:true},
          {name:'description',text:'描述'},
          {name:'mark_score',text:'评分'}
        ]
        let btns = [
          {
            text:'修改',
            callback(id){
              self.props.history.push('/modify/'+id)
            },
            classList:['btn btn-primary']
          },
          {
            text:'删除',
            callback(id){
              self.del_id = id
              self.setState({show:true})
            },
            classList:['btn btn-danger']
          }
        ]
        let datas = this.props.data
        let confirm = async () => {
          let id = self.del_id
          try{
            await datalib.get(`api/delbook/${id}`)
            self.props.setData(self.props.data.filter(item => item.id !== id))
            self.setState({show:false})
            let count = await datalib.get('api/pagecount/10')
            self.props.setCount(count)
          } catch(err) {
            alert('删除失败')
            console.error(err)
          }
        }
        let cancel = ()=>{
          self.setState({show:false})
        }
        return (
            <div>
                <Router>
                    <Link to='/add'>
                        <button className="btn btn-primary">添加一本书</button>
                    </Link>
                    <Route path='/add' component={Add}></Route>
                    <Route path='/modify/:id' component={Modify}></Route>
                </Router>
                <Table fields={fields} btns={btns} datas={datas}></Table>
                {this.state.show?
                    <div className="shadow-box">
                        <Dialog key={this.state.show} text="确认删除？" cancel={cancel} confirm = {confirm}></Dialog>
                    </div>
                :''}
            </div>
        )
    }
}
export default connect(
    function(state,props){
      return {
        ...state,
        ...props
      }
    },{
      setData(data){
        return {
          type: SET_DATA,
          data
        }
      },
      setCurr(curr){
        return {
          type: SET_CURR,
          curr
        }
      },
      setCount(count){
        return {
          type: SET_COUNT,
          count
        }
      }
    }
  )(withRouter(PagPages));