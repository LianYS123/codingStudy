import React from 'react'
import {Icon,Avatar,Badge,Menu, Dropdown} from 'antd'
import {Link} from 'react-router-dom'
import './header.css'
class Header extends React.Component {
    render(){
        let userMenu = (  <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="#">
                登录
              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="#">
                注册
              </a>
            </Menu.Item>
          </Menu>)
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
                            <li><Link to='/news'>书城</Link></li>
                            <li><Link to='/about'>分类</Link></li>
                            <li><Link to='#'>排行</Link></li>
                            
                            <li>
                                <ul>
                                    <li><Icon type="search" /></li>
                                    <li>
                                    <Dropdown overlay={userMenu}>
                                    <Badge count={0}>
                                        <Avatar shape='square' 
                                        icon={<Icon type="user" />}
                                        // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                                        />
                                    </Badge>
                                    </Dropdown>
                                    </li>
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