import React,{Component} from 'react'
import './Table.css'

class Table extends Component {
    convertURL(icon){
        return `http://localhost:8080/imgs/${icon}`
    }
    render(){
        let datas = this.props.datas || []
        let fields = this.props.fields || []
        let btns = this.props.btns || []
        return (
            <table className="table">
            <thead>
                <tr>
                    {fields.map((field,index) => <th scope="col" key={index}>{field.text}</th>)}
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                {datas.map(data=>(
                <tr key={data.id}>
                    {fields.map((field,index)=>
                        <td key={index}>
                            {field.icon?(
                                <figure className="figure">
                                    <img src={this.convertURL(data[field.name])} className="figure-img img-fluid rounded" alt="..."/>
                                </figure>
                            ) : (
                            <div className="text">
                                {data[field.name]}
                            </div>
                            )}
                        </td>)
                    }
                    <td>
                        <div className="btn-group" role="group">
                            {btns.map((btn,index)=>(
                                <button 
                                type="button" 
                                className={btn.classList.join(' ') || "btn btn-primary"}
                                key={index}
                                onClick={btn.callback.bind(this,data.id)}>
                                    {btn.text}
                                </button>
                            ))}
                        </div>
                    </td>
                </tr>
                
                ))}
                
                
            </tbody>
            </table>
        )
    }
}
export default Table