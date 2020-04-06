import React from 'react';



function Hoc(Comp){
    return function({children,...props}){
        return (
            <div>
                <Comp {...props} stage="react">{children}</Comp>
            </div>
        )
    }
}

@Hoc
class HocBase extends React.Component{
    render(){
        const props = this.props;
        return (
            <div>
                {props.stage} - {props.children} <br/>
                otherProp: {props.other}
            </div>
        )
    }
    
}
export default HocBase;