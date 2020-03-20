import React, { PureComponent } from 'react';

export default class PureComp extends PureComponent{
    render(){
        console.log('1111');
        return (
            <div>
                纯组件：
                {this.props.name}
            </div>
        )
    }
}