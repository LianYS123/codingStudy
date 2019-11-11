import React,{Component} from 'react'
import './Panel.css'
import Img from './Img'
class Panel extends Component {
    state = {files:[]}
    getForm = () => {
        let form = new FormData(this.refs.form)
        this.state.files.forEach((item,index)=>form.append(item.name,item.file,`f${index}`))
        return form
    }
    beforeUpload = (file,item) => {
        this.setState({
            files:[
                ...this.state.files,
                {name:item.name, file}
            ]
        })
    }
    render(){
        let fields = this.props.fields || []
        let files = this.props.files || []
        let btns = this.props.btns || []
        return (
            <form ref='form' action='#' encType="multipart/form-data" className="panel">
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
                    </div>
                </div>
                ))}
                {files.map((item,index) => (
                <div className="form-group row" key={index}>
                    <label className='col-sm-2 col-form-label'>{item.text}</label>
                    <div className="col-sm-10">
                    <Img beforeUpload={file=>this.beforeUpload(file,item)}></Img>
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