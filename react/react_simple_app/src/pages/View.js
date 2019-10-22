import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route,withRouter} from 'react-router-dom'
import Table from '../components/Table';
import Dialog from '../components/Dialog'
import Add from './Add'
import {connect} from 'react-redux'
import {SET_DATA,SET_DIALOG} from '../actions'
import lib from '../libs/datalib'
import Modify from './Modify';


class View extends Component{
  constructor(...args){
    super(...args)
  }
  async componentDidMount(){
    let result = await lib.get('item/getItems')
    if(result.error){
    } else{
        this.props.setData(result.data)
    }
  }
  render(){
    let self = this
    let data = this.props.data || []
    let btns = [
        {
            value:"修改",
            classList:["btn","btn-primary"],
            linkTo:"modify",
            callback(item){
                this.props.history.push("/modify/" + item.ID)
            }
        },
        {
            value:"删除",
            classList : ["btn","btn-danger"],
            callback(item){
                self.delId = item.ID
                this.props.setDialog(true)
            }
        }
    ]


    let info = {//title, message, btns:classList,callback,value
        title:'提示',
        message:'确认删除？',
        btns:[
            {
                value:"确认",
                classList:["btn","btn-primary"],
                callback(){
                    if(self.delId) lib.get('item/del/'+self.delId,function(){
                        alert('删除成功')
                        self.props.setDialog(false)
                        self.props.setData(data.filter(item => item.ID != self.delId))
                        self.delId = NaN
                    })
                }
            },
            {
                value:"取消",
                classList:["btn","btn-secondary"],
                callback(){
                    self.props.setDialog(false)
                }
            }
        ]
    }
    let show = this.props.showDialog
    return (
        <Router>
            <Route path="/add" component={Add}></Route>
            {/* <Route path="/modify" component={Modify}></Route> */}
            <Route path="/modify/:id" component={Modify}></Route>
            <Link className="btn btn-primary" to="/add">添加商品</Link>
            <Table data={data} btns={btns}></Table>
            {show?<Dialog info={info}></Dialog>:""}
        </Router>
    )
  }
}

export default connect(function(state,props){
    return {
      ...state,
      ...props
    }
  },{
    setData(data){
      return {
        type:SET_DATA,
        data
      }
    },
    setDialog(showDialog){
        return {
            type:SET_DIALOG,
            showDialog
        }
    }

})(withRouter(View))