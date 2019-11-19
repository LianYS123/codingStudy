import React from 'react'
import 'sidebar.css'
class Sidebar extends React.Component {
    render(){
       return (
        <div className="more">
        <div className="leftOptions">
            <div className="leftHeader">
                <i className="fa fa-bars"></i>	
            </div>
            <ul className="leftItems">
                <li>
                    <div className="itemIcon">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="itemName">
                        <a href="index.html">首页</a>
                    </div>
                </li>
                <li>
                    <div className="itemIcon">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="itemName">
                        <a href="about.html" id="aboutLeftLink">关于我们</a>
                    </div>
                </li>
                <li>
                    <div className="itemIcon">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="itemName">
                        <a href="news.html" id="newsLeftLink">新闻中心</a>
                    </div>
                </li>
                <li>
                    <div className="itemIcon">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="itemName">
                        <a href="#contactInfo" id="contactLeftLink">联系方式</a>
                    </div>
                </li>
                <li>
                    <div className="itemIcon">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="itemName">
                        <a href="#" id="modeChangeLeftLink">模式切换</a>
                    </div>
                </li>
            </ul>
        </div>	
    </div>
       )
    }
}

export default Sidebar