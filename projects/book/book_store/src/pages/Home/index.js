import React from 'react'
import Book from '@/components/Book'
import {Carousel,Card} from 'antd'
import './home.css'
class Footer extends React.Component {
    render(){
       return (
        <div className="content" id="items">
			
        <div className="slideImages gray">
            <Carousel autoplay effect='fade'>
                <div>
                    <div className='img-wrapper'>
                        <img alt="example" 
                            src="https://cdn.pixabay.com/photo/2019/11/17/19/30/egypt-4633257_1280.jpg" />
                        <span className="label"><a href="#">超牛逼的小说网站1</a></span>
                    </div>
                </div>
                <div>
                    <div className='img-wrapper'>
                        <img alt="example" 
                            src="https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_1280.jpg" />
                        <span className="label"><a href="#">超牛逼的小说网站1</a></span>
                    </div>
                </div>
                <div>
                    <div className='img-wrapper'>
                        <img alt="example" 
                            src="https://cdn.pixabay.com/photo/2017/09/04/09/38/cross-2713356_1280.jpg" />
                        <span className="label"><a href="#">超牛逼的小说网站1</a></span>
                    </div>
                </div>
            </Carousel>
        </div>
        
        <ul>
            <li className="title">
                <div className="label">
                    热门分类
                </div>
            </li>
            
            <li className="cateName"><i className="fa fa-coffee coffeeIcon"></i>  玄幻小说</li>
            <li className="c1 item">
                {[1,2,3,4].map(num=>(
                <Book key={num} title={'无限统御'} style={{margin:20}}
                img_src={'http://static.zongheng.com/upload/cover/92/90/92903e5b9e1a7d59e39f9a2702c62b23.jpeg'}
                intro={'一场红色的烟雾之后.超过百分之九十九的人变成了丧尸。在这满是丧尸的世界里，恶毒，友善，冷漠，勇敢，脆弱，无畏，倔强'}
                author={'木有下限'}
                ></Book>
                ))}
            </li>
            <li className="cateName"><i className="fa fa-coffee coffeeIcon"></i>  玄幻小说</li>
            <li className="c1 item">
                {[1,2,3,4].map(num=>(
                <Book key={num} title={'无限统御'} style={{margin:20}}
                img_src={'http://static.zongheng.com/upload/cover/92/90/92903e5b9e1a7d59e39f9a2702c62b23.jpeg'}
                intro={'一场红色的烟雾之后.超过百分之九十九的人变成了丧尸。在这满是丧尸的世界里，恶毒，友善，冷漠，勇敢，脆弱，无畏，倔强'}
                author={'木有下限'}
                ></Book>
                ))}
            </li>
            <li className="cateName"><i className="fa fa-coffee coffeeIcon"></i>  玄幻小说</li>
            <li className="c1 item">
                {[1,2,3,4].map(num=>(
                <Book key={num} title={'无限统御'} style={{margin:20}}
                img_src={'http://static.zongheng.com/upload/cover/92/90/92903e5b9e1a7d59e39f9a2702c62b23.jpeg'}
                intro={'一场红色的烟雾之后.超过百分之九十九的人变成了丧尸。在这满是丧尸的世界里，恶毒，友善，冷漠，勇敢，脆弱，无畏，倔强'}
                author={'木有下限'}
                ></Book>
                ))}
            </li>
        </ul>
        
        </div>
       )
    }
}

export default Footer