hooks

function FruitList({fruits,setFruits}){
    return (
        <div>
            {fruits.map(f=>(<li onCkick = {()=>{setFruits(f)}}>))}
        </div>
    )
}

function FruitAdd(props){
    const [pname,setPname] = userState('');
    const onAddFruit = e => {
        if(e.key === "Enter"){
            props.onAddFruit(pname);
            setPname("");
        }
    }

    return (
        <div>
            <input type="text" value={pname} onChange = {e => setPname(e.target.value)}/>
        </div>
    )
}

function HookTest(){
    //返回数组[],数组第一个是状态，第二个是设置状态的函数
    //useState参数是fruit的初始值
    //一对一关系，与redux相似
    const [fruit,setFruit] = useState('');  //返回数组[],第一个参数是状态，第二个是设置状态的函数
    const [fruits,setFruits] = useState([]);  
    return (
        <div>
            <FruitAdd onAddFruit={pname=>setFruits([...fruits,pname])}>   //直接覆盖，
        </div>
    )
}

- 副作用钩子： useEffect
//每次组件重新渲染都会执行
//如果不做依赖设置，所有状态变化都会设置执行
//如果没有依赖，设置空数组
useEffect(() => {
    setTimeout(()=>{
        setFruits(['',''])
    },1000)
},[])  //设置空数组时，类似于create的钩子

//dom操作
useEffect(() => {
    document.title = fruit;
},[fruit])   

//清除工作：返回清除函数
useEffect(() => {
    let timer = setInterval(()=>{

    },1000)

    return function(){
        clearInterval(timer);
    }
})


- useReducer
redux的Reducer是什么？：接收action，改变state，类似vue的mutation

function fruitReducer(state,action){
    switch(action.type){
        case 'init':
            return action.payload;
        case 'add':
            return [...state,action.payload];
        default:
            return state;
    }
}
组件中
//参数1是相关reducer，参数2是初始值
//解构数组第一位是state,的二维是dispatch(类似vue的commit?)
const [fruits,dispatch] = useReducer(fruitReducer,[]);    

setTimeout(()=>{
    dispatch({type:"init", payload:["草莓","香蕉"]})
})
<FruitAdd onAddFruit={pname=>dispatch({type:"init", payload:[...fruits,pname]})}>   //直接覆盖，

//上下文，实现dispatch解耦
const Context = React.createContext();
<Context.Provider value={{fruits,dispatch}}>
</Context.Provider>

在函数组件中
const {dispatch} = useContext(Context)  //传入Context对象

antd表单：
getFieldDecorator("userName",{rules:[]})(InputComp)  //封装Form.Item为可校验的组件



FormCreate(Comp){
    return class extends React.Component{
        consturctor(props){
            super(props);
            //选项
            this.options = {};
            //数据
            this.state = {};
        }
        handlerChange = e => {
            const {name,value} = e.target;
            this.setState({[name]:value},()=>{
                this.validateField(name);   //通过回调设置，防止state没变就执行校验
            });
        }
        validateField = field => {
            const rules = this.options[field].rules;
            const isValid = rules.every(rule => {
                if(rule.required){
                    if(!this.state[field]){
                        this.setState({
                            [field+"Message"]:rule.message
                        })
                        return true;
                    }
                }
                return false;
            })
            if(isValid){
                this.setState(}
                [filed+"Message"]:''
            }
            return isValid;
        }
        validateFileds = (cb) => {
            const results = Object.keys(this.options).map(field => this.validateField(field));
            const ret = rets.every(v => v);
            cb(ret,this.state);
        }
        getFieldDec = (field,options) => {
            this.options[field] = options;
            //返回高阶组件
            return InputComp =>(
                <div>
                    {
                        React.cloneElement(InputComp,{
                            name:field,
                            value:this.state[field] || '',
                            onChange: this.handlerChange   //执行校验，设置状态
                        })
                    }
                </div>
            )
        }
        render(){
            return <Comp {...props} validateFields={this.validateFields} getFieldDec={this.getFieldDec}></Comp>
        }
    }
}
FormCreate(FormTest)
FormTest
    const getFieldDec = this.props;
    onSubmit = () => {
        this.props.validateFields((isValid,values)=>{
            if(isValid){

            } else {

            }
        })
    }
    return (
        <div>
            <input type="text"/>
            <input/>
        <div>
    )

其他：Form(布局，提交) FormItem(错误信息)  Input前缀图标等

rules = [{required: true, message: 'Please input your password!'}]