import React,{Component} from 'react'
import Table from '../components/Table'
import datalib from '../libs/datalibs';
import {connect} from 'react-redux'
import {SET_DATA, SET_CURR, SET_COUNT} from '../actions'
import {withRouter} from 'react-router-dom'
import loadData from '../utils/loadData'
import Dialog from '../components/Dialog'
class PagPages extends Component {
    state = {show : false}
    async componentDidMount(){
        let page = this.props.match.params.curr || 1
        if(page !== this.props.curr) {
          this.props.setCurr(page)
        }
        
        let data = await loadData(page)
        if(data) this.props.setData(data)
    }
    render(){
        console.log('test')
        let curr = this.props.match.params.curr || 1
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
            async callback(id){
              self.props.history.push(`/page/${curr}/modify/${id}`)
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
export default withRouter(connect(
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
  )(PagPages));