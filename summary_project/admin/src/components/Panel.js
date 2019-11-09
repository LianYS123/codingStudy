import React,{Component} from 'react'
import './Panel.css'

class Panel extends Component {
    constructor(...args){
        super(...args)
    }
    getForm(){
        return this.refs.form
    }
    render(){
        let fields = this.props.fields || []
        let btns = this.props.btns || []
        return (
            <form ref='form' encType="multipart/form-data" className="panel">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">{this.props.title}</span>
                </nav>
                {fields.map((field,index) => (
                <div className="form-group row" key={index}>
                    <label className='col-sm-2 col-form-label'>{field.text}</label>
                    <div className="col-sm-10">
                    <input 
                    readOnly={field.readOnly || ''}
                    className="form-control" 
                    name={field.name} 
                    placeholder={field.placeholder || ''}
                    defaultValue={field.defaultValue||''}
                    type={field.type || 'text'}/>
                    {field.icon? <img src="..." alt="..." className="img-thumbnail"/> : ''}
                    </div>
                </div>
                ))}
                <div className="btn-group" role="group">
                {btns.map((btn,index)=>
                   ( <button 
                    type="button" 
                    className={btn.classList.join(' ') || "btn btn-primary"}
                    key={index}
                    onClick={btn.callback.bind(this)}>
                        {btn.text}
                    </button>)
                )}
                </div>
            </form>
        )
    }
}
export default Panel