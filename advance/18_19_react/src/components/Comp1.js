import React, { Component } from 'react';
import style from './Comp1.module.css';
import {Button} from 'antd';

export default class Comp1 extends Component {
    state = {count:1}
    componentDidMount(){
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)  //输出1，异步执行
    }
    handlerClick(){
        this.setState({ count: this.state.count + 1 });
        this.setState(state=>{
            console.log(state);
            return state;
        })
    }
    render() {
        return (
            <div className={style.test}>
                {this.state.count} <br/>
                <Button type='primary' onClick={()=>{this.handlerClick()}}>click me</Button>
            </div>  //显示2，批量执行
        )
    }
}