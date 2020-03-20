import React from 'react';
function Radio({children,...rest}){
    return (
        <label>
            <input type="radio" {...rest}/>
            {children}
        </label>
    )
}
function RadioGroup(props){
    return (<div>
    {React.Children.map(props.children, child => {
        //不能修改原来的child，要修改的话返回一个新的
        return React.cloneElement(child,{name:props.name})
    })}
    </div>)
}

export default function (){
    return (
        <RadioGroup name="mvvm">
            <Radio value="vue">vue</Radio>
            <Radio value="react">react</Radio>
            <Radio value="angular">angular</Radio>
        </RadioGroup>
    )
}