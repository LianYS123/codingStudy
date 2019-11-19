import React from 'react'

class Detail extends React.Component{
    render(){
        <div class="detailDiv" id="coffeeDetail">
            <div class="cancelDetail" id="detailClose">
                <i class="fa fa-close"></i>
            </div>
            <div class="coffeeDetail">
                <div class="options">
                    <ul>
                        <li>
                            <div class="leftDetail">
                                <div class="name">拿铁咖啡</div>
                                <div class="price">￥88</div>
                            </div>
                            <div class="rightDetail">
                                <i class="fa fa-heart"></i>
                            </div>
                        </li>
                        <li class="decription ">Decription decription decription decription decription decription decription decription </li>
                    </ul>
                </div>					
                <div class="coffeeImage">
                    <img src="img/coffee/antique-beverage-caffeine-1254655.jpg"/>
                </div>

            </div>
        </div>
    }
}

export default Detail