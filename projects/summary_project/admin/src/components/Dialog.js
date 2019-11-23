import React,{Component} from 'react'
import './Dialog.css'
class Dialog extends Component {
    confirm(e){
        e.preventDefault()
        this.props.confirm && this.props.confirm()
    }
    cancel(e){
        e.preventDefault()
        this.props.cancel && this.props.cancel()
    }
    render(){
        return (
            <div className="card dialog">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title || '提示'}</h5>
                    <p className="card-text">{this.props.text || ''}</p>
                    <div className="btn-group" role="group">
                    <a href="aaa" className="card-link" onClick={(e)=>{this.confirm(e)}}>确定</a>
                    <a href="aaa" className="card-link" onClick={(e)=>{this.cancel(e)}}>取消</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dialog