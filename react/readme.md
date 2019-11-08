react 生态圈：
1. JSX：扩展的JS，React强依赖
2. Flux：管理数据，太麻烦
3. redux
4. React-Native：移动端原生应用。
5. React-Server: 服务端渲染

balel jsx bower

browser.js react react-dom

<script type='text/babel'>
let root = document.getElementById('')
ReactDOM.render(
    <div>
    aaa
    </div>,
    root
)
</script>

jsx 创建元素：let div = <div title='aaa'>aaa</div>
必须包裹在一个div标签里面
jsx注意：
class -> className
<label for='user'> -> <label htmlFor='user'> 

react.js:
1. 组件
2. 状态


组件：
class Cmp1 extends React.Component{
    constructor(...args){
        super(...args)

        this.name='lian'
    }
    fn(){
        return 'aaa'
    }
    render(){
        let div = <div>bbb</div>
        return ( //js的return不能换行
            <div>
            性能：{this.name},
            {this.fn()}
            {div}
            </div>
        )
    }
}

React组件必须首字母大写
jsx里面行间样式不能直接写,必须用json
let json = {color:'red'}
style = {json}  ->
style={{color:'red'}}
注意：json中使用驼峰命名：background-color -> backgroundColor
单标签要自封闭 <br/>


数组会自动展开

let arr = []
for(let i=0; i<6; i++){
    arr.push(
        <li key={i}></li>  //必须有key
    )
}

{arr}

react事件：onClick

fn(){
    
}
this.fn.bind(this) //防止this乱变

参数——props 只读的
状态——state

注意：之间绑定在this上的属性，如this.a的改变不会触发视图重新渲染

state只能在构造函数里面初始化：
constructor(){
    this.state={a:0}
}

对状态的任何修改都会导致render重新渲染

修改状态：this.setState({
    a: this.state.a + 1
})//只有这种方式修改状态


ref
refs
跟vue差不多


组件的生命周期：
componentDidMount()挂载
componentDidUpdate()更新

create-react-app : react脚手架
npm i -g create-react-app
create-react-app appName

数据交互：
constructor不能加async
在使用script引入react的模式中，componentDidMount也不能用async
async componentDidMount(){
    await fetch()
}

* 特别注意：
Unexpected token < in JSON at position 0：
实际上是因为内置服务器只允许访问public文件夹下面的静态文件
访问的文件默认会去public文件夹下面找，如果未找到，返回index.html
这个错误是因为fetch得到的是一个index.html文件，而我用解析json的方式去解析，就会报这个错。
把要访问的文件放进public文件夹下面就好了


import React,{Component} from 'react' //必须引React，它内部会用(jsx也强依赖React)

class Comp1 extends Component{

}

注意：yarn装的和npm装的不兼容,脚手架默认yarn装



--------------------------------------------------redux------------------------------------------------------
redux:集中状态管理

provider: 包在最外面，用来保存数据
其实就是一个组件，来自react-redux,将数据作为这个组件的属性传下去
connect: 状态映射
写在子组件中，将从provider里面传下来的数据和原本的props合并
reducer: 状态对象

状态的更新：action

cnpm i redux -D
cnpm i react-redux -D
引入：
import {createStore} from 'redux
import {Provider} from 'react-redux'
1. 创建存储
初始化和每当变化都要执行
function reducer1(state,action){
    if(!state){
        return {
            name: 'lian'
        }
    }
}

可以简写：
function reducer1(state=,action){
   
}
2. 创建储存对象
const store = createStore(reducer1)
3. Provider
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

组件中：
connect:
connect(function(){})里面这个函数就是为了合并冲突
export default connect(function(state,props){  //state:来自于provider, props来自于原始props
    return state;
})(App)

第二个参数是json ，里面有好多方法，用来放action
函数也会在props里面
export default connect(function(state,props){  //state:来自于provider, props来自于原始props
    return state;
},{
    setName(name){ //action函数，用来改变state,会被reducer调用
        return { //可以返回任何东西，会被reducer接收
            type:'set_name',
            name
        }
    }
})

在index.js的reducer中：
这个函数每次状态变化都会调用(每次子组件中调用设置状态函数都会传一个action到这个函数并执行之)
在reducer中修改全局的数据
function reducer1(action={name:'lian',age:18},action){
    //判断action里面的type来执行不同的操作
    switch(action.type):
        case 'set_name':
            return { //必须返回一个新的state，不能是在原先的state里面修改再返回
                ...state,
                name:action.name //这就是setName传过来的action里面的name
            }
            break;
        default: //默认保持原状
            return state
}


优化：
将所有的操作名放在actions.js里面
export default const SET_NAME = 'set_name'
将store的创建放在store.js里面


combineReducers:合并reducer
let arr = combineReducer({
    user: reducer1,
    company: reducer2
})
export default createStore(arr)


单向数据流：
state -> component -> action -> state...

-----------------------------------------------router-----------------------------------------------
react-router-dom
Router:
Route:
Link:

cnpm i react-router-dom -D

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

BrowserRouter 会引发页面跳转

<Router>
<div>
    <link to='/'>首页</Link>
    <link to='/news'>新闻</Link>
    <Route path='/' exact component={Cmp1}/>  exact 不向后匹配
    <Route path='/' component={Cmp2}/> 
</div>
</Router>


state={
    data:''
}
//路由传参,数据保存
compoentDidUpdate(old_props,old_state){
    let old_id = old_props.match.params.id;
    let id = this.props.match.params.id;
    if(id!=old_id){ //判断id是否真变了
        //更新
        this.setState({
            data:id==1?'aaa':'bbb'
        });
    }
}
嵌套路由：

news:
<Link to='/news/guoji'>国际</Link>
<Link to='/news/shehui'>社会</Link>

<Route path='/news/guoji' component={Mod1}/>
<Route path='/news/shehui' component={Mod2}/>


let path = this.props.match.path //这是上一级的path
 
<Link to=`${path}/guoji`>国际</Link>



数据在组件中获取，传到redux中

高阶组件：工厂模式   -》   将组件作包在一个函数里返回，引入时通过new创建
input    ref=name    this.refs.name.value

添加成功，页面刷新：可以用link，不过失败也会刷新
用js控制跳转：this.props.history
button 要加type=button 不然会自动识别成submit


Dialog button 传title ，用index做key
callback={fn}
this.props.callback(index)

Table fnDel
this.props.del_callback && this.props.del_callback(ID);
delID是属性的一部分，不用是state

dialog
this.callback = null
open(fn){
    this.callback = fn;
}
close()

被connect包装好的组件不能用ref

data.js
const SERVER = 'http:...'
async function get(url) {
    let url = `${SERVER}/${url}`;
    let res = await fetch(url);
    let data = await res.json();
    return data
}

export default {
    get
}



------------------------------------------------------------------------------------------------------------------

form下面的表单如果不加type，可能会被自动识别为submit

Error: Invariant failed: You should not use <withRouter(Connect(View)) /> outside a <Router>
这个错误：不能在Router外面使用withRouter，将App用Router包起来就行了
push不会引发子组件重新渲染

不是路由中的组件不能用withrouter(不能用refs调用子组件中的push)

备份this? 备份的this可以修改组件状态

Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
组件外不能修改组件状态

通过回调函数传回去的this(子组件的this)，可以改变子组件的状态,但是只能通过点击子组件触发，很多场合不适用。

import 必须放在头部

Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
被connect包裹的组件无法使用refs

input 有value必须要有onChange={this.fn} 否则报错

post:添加，修改
get：查询，删除

给表单绑定value值无法输入：通过onChange改变值

使用bind如何同时传事件对象和自己的参数？
onChange={function(e){ this.onChange(e,index) }.bind(this)}
onClick={e=>{
    callback(index+1,e)  //同时传递事件函数和参数
}}

父组件渲染子组件不渲染:
通过给子组件添加不同的key即可,每次父组件执行rend方法时,发现key不同就会重新加载子组件
添加id
通过给全新属性？

var timestamp = Date.parse(new  Date());//不推荐使用，因为毫秒级别的数值被转化为000 ，不准确！
var timestamp = (new Date()).valueOf();//获取当前毫秒的时间戳，准确！
var timestamp = new Date().getTime();//返回数值单位是毫秒；

this.setState({}) 是一个异步函数，可以跟在await后面

