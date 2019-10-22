import React,{Component} from 'react';
import Panel from '../components/Panel'
import {withRouter} from 'react-router-dom'  //用来包装暴露出去的组件
import datalib from '../libs/datalib'
import {SET_DATA} from '../actions'
import {connect} from 'react-redux'
import "./Add.css"

class Add extends Component{
  constructor(...args){
    super(...args)
  }
  async del(id){
    console.log(id);
    this.refs.dialog.open();
  }
  render(){
    let self = this  //防止回调函数中的this乱变
    let fields = [
      {
          fieldName:"商品名称",
          placeholder:"请输入商品名称",
          name:"item_name",
      },
      {
          fieldName:"商品价格",
          name:"item_price",
          placeholder:"请输入商品价格",
      },
      {
          fieldName:"描述",
          name:"desc",
          reminder:"描述为选填项",
          placeholder:"请输入商品描述",
      }
    ]
    let btns = [
        {
            value:"添加",
            classList:["btn","btn-primary"],
            callback(fields){
              datalib.post('item/add',fields,function(res){
                fields.ID = res.insertId;
                let data = self.props.data;
                data.push(fields)
                self.props.setData(data)
                self.props.history.push('/')
                alert('添加成功')
              })
            }
        },
        {
            value:"取消",
            classList:["btn","btn-secondary"],
            callback:function(){
                self.props.history.push('/')
            }
        }
    ]
    return (
      <div className="wrapper-page">
          <div className="panelDiv">
              <Panel title="添加商品" fields={fields} btns={btns}></Panel>
          </div>
      </div>
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
  })(withRouter(Add))
