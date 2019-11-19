import './pages/Home/home.css'
import React from 'react'
import {Carousel} from 'antd'

export default () => (
    <div style={{width:'500px',height:'500px',backgroundColor:'white'}}>
        <Carousel>
                <div>
                    <div style={{width:'100%',height:'100px',border:'1px solid',backgroundColor:'skyblue'}}></div>
                </div>
                <div>
                    <div style={{width:'100%',height:'100px',border:'1px solid',backgroundColor:'red'}}></div>
                </div>
        </Carousel>
    </div>
)