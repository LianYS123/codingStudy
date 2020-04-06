import React, { PureComponent } from 'react';

const PureComp1 = React.memo(function(props){
    console.log('1111');
    return (
        <div>
            纯组件：
            {props.name}
        </div>
    )
})

class PureComp2 extends PureComponent{
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

export default PureComp1