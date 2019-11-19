import React from 'react'
import './footer.css'
class Footer extends React.Component {
    render(){
       return (
        <div className="footer" id="contactInfo">
        <ul>
            <li>
                <div>电话：</div>
                <div>12345678910</div>
            </li>
            <li>
                <div>传真：</div>
                <div>12345678910</div>
            </li>
            <li>
                <div>E-mail：</div>
                <div>123456@web.com</div>
            </li>
            <li>
                <div>公司地址:</div>
                <div>北京市海定区上定信息路22号实创大厦</div>
            </li>
        </ul>
        </div>
       )
    }
}

export default Footer