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
                    <div style={{width:'100%',height:'300px',overflow:'hidden',position:'relative'}}>
                        <img alt="example" 
                            style={{maxWidth:'100%'}}
                            src="https://cdn.pixabay.com/photo/2019/10/30/16/19/fox-4589927__340.jpg" />
                        <span className="label"><a href="#">超牛逼的小说网站1</a></span>
                    </div>
                </div>
                <div>
                    <div style={{width:'100%',height:'300px',overflow:'hidden',position:'relative'}}>
                        <img alt="example" 
                            style={{maxWidth:'100%'}}
                            src="https://cdn.pixabay.com/photo/2019/11/02/20/18/fog-4597348__340.jpg" />
                        <span className="label"><a href="#">超牛逼的小说网站2</a></span>
                    </div>
                </div>
                <div>
                    <div style={{width:'100%',height:'300px',overflow:'hidden',position:'relative'}}>
                        <img alt="example" 
                            style={{maxWidth:'100%'}}
                            src="https://cdn.pixabay.com/photo/2019/10/22/02/37/nature-4567502__340.jpg" />
                        <span className="label"><a href="#">超牛逼的小说网站3</a></span>
                    </div>
                </div>
            </Carousel>
        </div>
        
        <ul>
            <li className="title">
                <div className="label">
                    啊啊啊啊啊!
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