import React,{Component} from 'react'
import datalib from '../libs/datalibs'
import Panel from '../components/Panel'
import {connect} from 'react-redux'
import './Add.css'
import {withRouter} from 'react-router-dom'
import loadData from '../utils/loadData'
import {SET_DATA} from '../actions'
class Modify extends Component {
    render(){
        let self = this
        let id = this.props.match.params.id || ''
        let data = this.props.data || []
        let item = data.find(item=>item.id + '' === id) || {}
        let fields = [
            {name:'id',text:'ID',defaultValue:item.id || '',readOnly:true},
            {name:'title',text:'名称',defaultValue:item.title || ''},
            {name:'author',text:'作者',defaultValue:item.author || ''},
            {name:'description',text:'描述',defaultValue:item.description || ''}
        ]
        let files = [{name:'icon',text:'封面'}]
        let btns = [
          {
            text:'提交',
            async callback(){
                try{
                    let form = this.getForm()
                    await datalib.post(`api/book/${id}`,form)
                    self.props.history.goBack()
                    let data = await loadData(self.props.curr)
                    if(data) self.props.setData(data)
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
                    <Panel title="修改" fields={fields} btns={btns} files={files} key={item.id}></Panel>
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
    setData(data){
      return {
        type:SET_DATA,
        data
      }
    }
  }
)(withRouter(Modify));