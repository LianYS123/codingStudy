import React,{Component} from 'react'
import './about.css'
class About extends Component {
    render(){
        return (
            	
			<div className="content" id="content">
            <div className="aboutDiv">
                <div className="aboutDesc aboutItem">
                    <div className="descTitle" id="title">
                        tilte
                    </div>
                    <div className="descContent" id="desc">
                        
                    </div>
                </div>
                <div className="message aboutItem">
                    <div>
                        <textarea placeholder="欢迎留言评论..."></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button className="submitBtn">提交评论</button>
                    <button className="login">匿名评论</button>
                </div>
                <div className="comments aboutItem">
                    <ul>
                        <li>
                            <div className="face">
                                <img src="img/coffee/adult-back-view-beautiful-241558.jpg"/>
                            </div>
                            <div className="commentInfo">
                                <div className="userInfo">
                                    <span className="userName">张三</span>
                                    <span className="commentTime">2天前</span>
                                </div>
                                <div className="commentText">
                                    你可真牛逼
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="face">
                                <img src="img/coffee/adult-back-view-beautiful-241558.jpg"/>
                            </div>
                            <div className="commentInfo">
                                <div className="userInfo">
                                    <span className="userName">李四</span>
                                    <span className="commentTime">2天前</span>
                                </div>
                                <div className="commentText">
                                    你可真牛逼
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="face">
                                <img src="img/coffee/adult-back-view-beautiful-241558.jpg"/>
                            </div>
                            <div className="commentInfo">
                                <div className="userInfo">
                                    <span className="userName">王五</span>
                                    <span className="commentTime">2天前</span>
                                </div>
                                <div className="commentText">
                                    你可真牛逼
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="face">
                                <img src="img/coffee/adult-back-view-beautiful-241558.jpg"/>
                            </div>
                            <div className="commentInfo">
                                <div className="userInfo">
                                    <span className="userName">赵六</span>
                                    <span className="commentTime">2天前</span>
                                </div>
                                <div className="commentText">
                                    你可真牛逼
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        )
    }
}
export default About