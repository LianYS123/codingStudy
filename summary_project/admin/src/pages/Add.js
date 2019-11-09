import React,{Component} from 'react'
import Panel from '../components/Panel'
import './Add.css'
import {withRouter,BrowserRouter as Router,Route,Link} from 'react-router-dom'
class Add extends Component {
    constructor(...args){
        super(...args)
    }
    render(){
        let self = this
        let fields = [
            {name:'id',text:'ID',placeholder:'请输入ID'},
            {name:'title',text:'名称',placeholder:'请输入名称'},
            {name:'author',text:'作者',placeholder:'请输入作者'},
            {name:'icon',text:'封面',icon:true,type:'file'},
            {name:'description',text:'描述',placeholder:'请输入描述'},
            {name:'mark_score',text:'评分',placeholder:'请输入评分'}
        ]
        let btns = [
          {
            text:'提交',
            callback(){
                console.log(this.getForm())
            },
            classList:['btn btn-primary']
          },
          {
            text:'取消',
            callback(){
                self.props.history.goBack()
            },
            classList:['btn btn-secondary']
          },
        ]
        return (
            <div className='add'>
                <Panel title="添加" fields={fields} btns={btns}></Panel>
            </div>
        )
    }
}
export default withRouter(Add)