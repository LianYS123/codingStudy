react
安装/直接执行
npx create-react-app projectName

一次编写，到处执行，ReactDOM是浏览器的渲染器
ReactDOM.render(<App>,doument.getElementById('root'))

原始的写法
count = 0;
setInterval(render,1000);   
function render(){
    ReactDOM.render(<h1>{count++}</h1>,doument.getElementById('root'))
}

jsx:
<App/> => React.createElement(...) 所以用到jsx的地方都要导入React

自定义组件开头大写
<JsxTest/>
代码提示友好，会自动导入

组件：
函数组件
function(props){
    //属性是只读的，不能改
    return <div>{props.name}</div>
}

类类型组件
class Clock extends Component{
    state = {};  //简化写法，可以不写constructor
    constructor(props){
        //写了constructor就必须调用super
        super(props);  //拿到props
        this.state = {};
    }
    render(){
        return (
            <div>{this.state.date.toLocalString()}</div>
        )
    }
}

修改状态
setState()
状态可能是异步的
状态是批量执行的，多次修改状态会被合并成一次

this.state = {count:1}
this.setState({count:this.state.count+1})
this.setState({count:this.state.count+1})
this.setState({count:this.state.count+1})
console.log(this.state.count)  //输出1，异步执行

render(){
    return (
        <div>{count}</div>  //显示2，批量执行
    )
}

如果要获取异步的状态值
方式1.
this.setState(state => {
    console.log(state.count);
    return state;
})
this.setState({},state => {
    console.log(state.count);
})
方式2.
settimeout(()=>{
    console.log(this.state.count)
})
//方式3
document.addEventlistner("click",this.changeCounter);//原生事件
changeCounter = () => {
    this.setState({count:this.state.count + 1})  
    console.log(this.state.count)  //2
}

没有双向绑定，
<input value={this.state.name} onChange={handler}/>
<input value={this.state.name} onChange={ e => {this.handler(e)} }/> 方便传参还能保存this指向

addGood = () => {
    this.setState({
        goods:[...this.state.goods,{text:this.state.name}]  //改变数组，推荐创建一个新的数组
    })
}

生命周期
16.3之前
mount: componentDidMount,componentWillMount ...
componentWillReceiveProps(){
    将要接收属性
}
update: shouldComponentUpdate(preProps,preState){...}、ComponentWillUpdate、 
unmount: componentWillUnmount  //一些清理工作，比如定时器清除

16.3渲染方式变成异步渲染
多了一个：getDerivedStateFromProps： props或者constructor执行的时候会被执行
所有带will的只留了一个:componentWillUnmount

16.4
getDerivedStateFromProps: props、constructor，state、forceUpdate执行都会执行

static getDerivedStateFromError(error){
    可以捕获错误
}

- 单个组件中使用的css
//App.module.css: 局部引入的方式
img{
    width: 100px;
}
App.js
import style from App.module.css
<div css={style.img}>

# React组件化：
antd: cnpm i -S antd
按需加载的配置方式
npm i react-app-rewired customize-cra babel-plugin-import -D   //方便配置

//config.override.js
const {overide,fixBabelImports} = require('customize-cra')
override返回一个函数，该函数返回的对象作为webpack的配置对象
module.exports = override(
    fixBaabelImoorts("import",{
        libraryName:"antd",
        libraryDirectory:"es",
        style:"css"   //css.js文件
    })
)

package.json  
"scirpt" :{
    "start":"react-app-rewired start",
    ...// 下面也要改
}
导入方式
import {Button} from 'antd'

flow函数： 由函数组成的数组逐渐执行，前面函数的结果作为后面的参数


纯组件
import {PureComponent} from 'react'
class Comment extends PureComponent{
    render(){
        console.log()
    }
}
这个PureComponent继承了Component，覆盖了shouldComponentUpdate，进行了浅比较(只进行一层循环)
传值方式
state = {
    {name:'111'},
    {name:'222'}
}
<Comp {...}>

如果是函数型组件使用pureComponent特性
const Comment = React.memo(function(){
    ...
})

高阶组件：高阶函数，使用函数包装组件，增强组件功能，返回新组件
//扩充组件能力
function Hoc(Comp){
    return function(props){
        return <Comp {...props} stage='react'>;   //stage:对返回的组件进行增强
    }
}

- 链式调用：

使用装饰器的语法：
npm i -D @babel/plugin-proposal-decorators

config-override.js
const {overide,fixBabelImports,addDecoratorsLegacy} = require('customize-cra')
modules.export = override(
    addDecoratorsLegacy()
)

//包3层
@withLog
@withStage
@withLog
@logWithOpts(opt)   //如果装饰器函数返回的是一个高阶组件(函数),可以使用这个语法
class Comp extends Component{
    ...
}

- 组件复合
容器型组件

```javascirpt
function Dialog(props){
    return <div>props.children</div>  //children是什么？合法的js表达式
}
function WelcomDialog(){
    return <Dialog><p>hello</p></Dialog>
}

function Composition(){
    return <WelcomDialog/>
}

FilterP(){
    return function(){
        return (
        <div>
            React.Children.map(props.children,child => {  //这个方法props.children如果不是数组也不会报错
                console.log(child);
                if(child.type !=== 'p){ //过滤掉类型不为p的元素
                    return;
                }
                return child;
            })
        </div>
        )
    }
}
```

<RadioGroup name="mvvm">
    <Radio value="vue">vue</Radio>
    <Radio value="react">react</Radio>
    <Radio value="angular">angular</Radio>
</RadioGroup>

function Radio({children,...rest}){
    reuturn (
        <label>
            <input type="radio" {...rest}>
            {children}
        </label>
    )
}
function RadioGroup(props){
    return (<div>
    {React.children.map(props.children, child => {
        //不能修改原来的child，要修改的话返回一个新的
        return React.cloneElemment(radio,{name:props.name})
    })}
    </div>)
}