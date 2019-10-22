import React,{Component} from 'react';
import {SET_DIALOG} from '../actions'
import './Dialog.css'
import {connect} from 'react-redux'
class Dialog extends Component{
    constructor(...args){
        super(...args)
    }
    render(){
        let info = this.props.info || {}  //title, message, btns:classList,callback,value
        return (
            <div className="dialog">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{info.title || ""}</h5>
                        <p className="card-text">{info.message}</p>
                        <div className="btn-group" role="group">
                            {info.btns.map((btn,index) => 
                                <button key={index}
                                className={btn.classList ? btn.classList.join(" ") : "btn btn-primary"} 
                                onClick={btn.callback && btn.callback.bind(this)}>{btn.value || "确认"}</button>
                            )}
                        </div>
                    </div>
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
    setDialog(showDialog){
        return {
            type:SET_DIALOG,
            showDialog
        }
    }

})(Dialog)