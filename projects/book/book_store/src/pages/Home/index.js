import React from 'react'
// import Card from '@/components/Card'
import {Carousel,Card} from 'antd'
import './home.css'
const {Meta} = Card
class Footer extends React.Component {
    render(){
       return (
        <div className="content" id="items">
			
        <div className="slideImages gray">
            <Carousel autoplay>
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
            <li className="c1 item" id="c1">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </li>
            <li className="cateName"><i className="fa fa-coffee coffeeIcon"></i>  武侠小说</li>
            <li className="c2 item" id="c2"></li>
            <li className="cateName"><i className="fa fa-coffee coffeeIcon"></i>  言情小说</li>
            <li className="c3 item" id="c3"></li>
        </ul>
        
        </div>
       )
    }
}

export default Footer