import React,{Component} from 'react'
import Table from '../components/Table'
import datalib from '../libs/datalibs';
import {connect} from 'react-redux'
import {SET_DATA} from '../actions'
import {withRouter,BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Add from './Add'
import Dialog from '../components/Dialog'
class PagPages extends Component {
    constructor(...args){
        super(...args)
        this.state={
            show:false
        }
    }
    async componentDidMount(){
        await this.loadData()
    }
    async loadData(size=10){
        let page = this.props.match.params.curr || 1
        console.log(`load data on page ${page}`);
        try{
            let data =  await datalib.get(`api/booklist/${page}/${size}`)
            this.props.setData(data)
        }
        catch(err) {
          alert('数据加载出错')
          console.error()
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
              alert(`${id} will be modified`)
            },
            classList:['btn btn-primary']
          },
          {
            text:'删除',
            callback(id){
              self.setState({show:true})
            },
            classList:['btn btn-danger']
          },
        ]
        let datas = this.props.data
        
        return (
            <div>
                <Router>
                    <Link to='/add'>
                        <button className="btn btn-primary">添加一本书</button>
                    </Link>
                    <Route path='/add' component={Add}></Route>
                </Router>
                <Table fields={fields} btns={btns} datas={datas}></Table>
                {this.state.show?
                    <div className="shadow-box">
                        <Dialog key={this.state.show} text="确认删除？" cancel={()=>{
                            self.setState({show:false})
                        }}></Dialog>
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
      }
    }
  )(withRouter(PagPages));