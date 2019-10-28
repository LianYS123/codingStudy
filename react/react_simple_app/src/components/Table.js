import React,{Component} from 'react';
import './Table.css'
import {SET_DIALOG} from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Table extends Component{
  constructor(...args){
    super(...args)
  }
  render(){

    let data = this.props.data || []  //防止data为undefined导致报错导致
    let arr = []
    for(let key in data[0]){
      arr.push(key)
    }

    let btns = this.props.btns || []

    return (
      <div>
        {arr && arr.length !== 0 ?
        <table className="table">
        <thead>
          <tr>
            {arr.map(key => <th scope='col' key={key}>{key}</th>)}
            <th scope="col">操作</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.ID}>
                {arr.map(key => <td key={key}>{item[key]}</td>)}
                <td>
                    <div className="btn-group" role="group">
                        {btns.map((btn,index) => 
                            <button
                                type="button"   
                                key={index} 
                                onClick={btn.callback && btn.callback.bind(this,item)}  
                                className={btn.classList ? btn.classList.join(" ") : "btn btn-primary"}>
                                {btn.value || 'submit'}
                            </button>
                        )}
                     </div>
                </td>
                
            </tr>
            )
          })}
        </tbody>

      </table>
      : <div className="alert alert-secondary" role="alert">
          No any data here, click add to append one.
         </div> }
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
  setDialog(showDialog){
      return {
          type:SET_DIALOG,
          showDialog
      }
  }

})(withRouter(Table))