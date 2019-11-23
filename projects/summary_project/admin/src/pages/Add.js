import React,{Component} from 'react'
import datalib from '../libs/datalibs'
import Panel from '../components/Panel'
import {connect} from 'react-redux'
import {SET_COUNT} from '../actions'

import './Add.css'
import {withRouter} from 'react-router-dom'
class Add extends Component {
    render(){
        let self = this
        let fields = [
            {name:'title',text:'名称',placeholder:'请输入名称'},
            {name:'author',text:'作者',placeholder:'请输入作者'},
            {name:'description',text:'描述',placeholder:'请输入描述'}
        ]
        let files = [{name:'icon',text:'封面'}]
        let btns = [
          {
            text:'提交',
            async callback(){
                try{
                    let form = this.getForm()
                    await datalib.post('api/book',form)
                    self.props.history.goBack()
                    let count = await datalib.get('api/pagecount/10')
                    self.props.setCount(count)
                }
                catch(e){
                    console.error(e)
                }                
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
                <div>
                    <Panel title="添加" fields={fields} btns={btns} files={files}></Panel>
                </div>
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
    setCount(count){
      return {
        type: SET_COUNT,
        count
      }
    }
  }
)(withRouter(Add));