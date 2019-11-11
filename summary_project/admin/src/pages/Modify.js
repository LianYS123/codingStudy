import React,{Component} from 'react'
import datalib from '../libs/datalibs'
import Panel from '../components/Panel'
import {connect} from 'react-redux'
import './Add.css'
import {withRouter} from 'react-router-dom'
class Modify extends Component {
    render(){
        console.log('test')
        let self = this
        let id = this.props.params.match.id
        let item = this.props.data.find(item=>item.id === id)
        let fields = [
            {name:'title',text:'ID',defaultValue:item.id,readOnly:true},
            {name:'title',text:'名称',defaultValue:item.title},
            {name:'author',text:'作者',defaultValue:item.author},
            {name:'description',text:'描述',defaultValue:item.description}
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
                    <Panel title="修改" fields={fields} btns={btns} files={files}></Panel>
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
  }
)(withRouter(Modify));