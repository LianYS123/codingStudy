import React,{Component} from 'react';
import './Panel.css'


class Panel extends Component{
    constructor(...args){
        super(...args)
        this.state = {
            fields : this.props.fields || []
        }
    }
    getFormFields(){
        let fields = this.state.fields || [];
        let formFields = {};
        fields.forEach(field => {
            let name = field.name;
            let value = field.value;
            if(name && name!==""){
               formFields[name] = value || ""
            }
        });
        return formFields;
    }
    onChange(e,index){
        let value = e.target.value
        this.setState({
            fields : this.state.fields.map((f,i) => i === index ? {...f , value} : f)
        })
    }
    render(){
        let fields = this.state.fields;
        let btns = this.props.btns || [];
        return (
            <div className="panel">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand">{this.props.title||"标题"}</span>
                </nav>
                <form>
                    {fields.map((field,index) => 
                        <div className="form-group" key={index}>
                            <label>{field.fieldName}</label>
                            <input 
                                className="form-control" 
                                name={field.name||""}
                                readOnly={field.readOnly?"readOnly":""} 
                                placeholder={field.placeholder || ''}
                                value={field.value || ""}
                                onChange={function(e){ this.onChange(e,index) }.bind(this)}/>
                            {field.reminder?<small className="form-text text-muted">{field.reminder}</small>:''}
                        </div>
                    )}

                    <div className="btn-group" role="group">
                        {btns.map((btn,index) => 
                            <button
                                type="button"   
                                key={index} 
                                onClick={btn.callback && btn.callback.bind(this,this.getFormFields())}  
                                className={btn.classList ? btn.classList.join(" ") : "btn btn-primary"}>
                                {btn.value || 'submit'}
                            </button>
                        )}
                    </div>
                </form>
                
            </div>
        )
    }
}
export default Panel