import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Sports from './Sports'
import Society from './Society'
class News extends Component {
    constructor(...args){
        super(...args)
    }
    render(){
        let path = this.props.match.path;
        return (
            <div>
                <h1>
                    新闻频道
                </h1>
                <Router>
                        <Link to={`${path}/sports`}>体育</Link>
                        <Link to={`${path}/society`}>社会</Link>
                        {/* 组件的属性首字母小写:component */}
                        <Route path={`${path}/sports`} component={Sports}></Route>
                        <Route path={`${path}/society`} component={Society}></Route>
                </Router>
                
            </div>
        )
    }
}
export default News