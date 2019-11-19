import React from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends React.Component {
    render(){
        return (
            <div>
                <div className='holder'></div>
                <div className="header">
                    <div className="nav">
                    
                    <div className="navLeft">
                        <ul>
                            <li>
                                <i className="fa fa-bars"></i>
                            </li>
                            <li>
                                我的小说网
                            </li>
                        </ul>
                    </div>
                    
                    <div className="navRight">
                        <ul>
                            <li><Link to='/home'>首页</Link></li>
                            <li><Link to='/news'>新闻中心</Link></li>
                            <li><Link to='/about'>关于我们</Link></li>
                            <li><Link to='#'>联系方式</Link></li>
                            
                            <li>
                                <ul>
                                    <li><Icon type="search" /></li>
                                    <li><Icon type="user" /></li>
                                </ul>
                                
                            </li>
                        </ul>
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Header