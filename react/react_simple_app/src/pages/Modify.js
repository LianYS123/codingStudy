import React,{Component} from 'react';
import Panel from '../components/Panel'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'  //用来包装暴露出去的组件
import datalib from '../libs/datalib'
import {SET_DATA} from '../actions'
import "./Add.css"

class Modify extends Component{
  constructor(...args){
    super(...args)
    this.state = {
        
    }
  }
  render(){
    let self = this  //防止回调函数中的this乱变
    let id = this.props.match.params.id;  //注意，这里的id是string类型
    let data = this.props.data || []
    let item = data.filter(ite => ite.ID === parseInt(id))[0] || {}
    let fields = [
        {
            fieldName: "商品编号",
            name:"ID",
            value:item.ID,
            placeholder:item.ID,
            readOnly: true
        },
        {
            fieldName:"商品名称",
            placeholder:"请输入商品名称",
            name:"item_name",
            value : item.item_name
        },
        {
            fieldName:"商品价格",
            name:"item_price",
            placeholder:"请输入商品价格",
            value : item.item_price
        },
        {
            fieldName:"描述",
            name:"desc",
            reminder:"描述为选填项",
            placeholder:"请输入商品描述",
            value : item.desc
        }
    ]
    let btns = [
        {
            value:"确认修改",
            classList:["btn","btn-primary"],
            callback(fields){
                datalib.post('item/modify',fields,function(res){
                    let newData = data.map(item => item.ID === fields.ID ? fields : item)
                    alert('修改成功')
                    self.props.setData(newData)
                    self.props.history.push('/')
                    console.log(res);
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
              <Panel title="修改商品" fields={fields} btns={btns} key={item.ID}></Panel>
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
  })(withRouter(Modify))
