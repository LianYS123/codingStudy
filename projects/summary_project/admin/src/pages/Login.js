import React from 'react'
import datalib from '../libs/datalibs'
import {withRouter} from 'react-router-dom'

class Login extends React.Component {
    handleSubmit = async ()=>{
        let form = this.refs.form
        let formData = new FormData(form)
        try{
            await datalib.post('admin/login', formData)
            this.props.history.push('/')
        } catch(e){
            alert(e)
        }
    }
    render(){
        return (
            <div>
                <form ref="form" method="post" encType="multipart/form-data">
                    username: <input name="username" type="text" /> <br/>
                    password: <input name="password" type="password" /> <br/>
                    <input type="button" value="提交" onClick = {this.handleSubmit}/>
                </form>
            </div>
        )
    }
}
export default withRouter(Login);