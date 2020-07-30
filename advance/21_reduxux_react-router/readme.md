
强化dispatch  ，处理异步的playload
wrapDispatch(dispatch){
    return function(action){
        if(isPromise(action.payload)){
            
        }
    }
}

在组件中对dispatch进行封装
const dispatch = wrapDispatch(originDispatch);  

表单FormItem控件错误信息处理

redux、 react-router

装：redux、react-redux

improt {createStore} from 'redux';

const store = createStore(reducer);
将store传递给子组件：
<Provider store={store}>
    <App />
</Porvider>

使用:connect传入映射函数，返回高阶组件
const mapStateToProps = state => ({
    fruits: state.list,
    loading: state.loading
})

不使用这种方法
<!-- const mapDispatchToProps = dispatch => ({
    loadingStart: () => dispatch({type: 'loading_start'}),
    loadingEnd: ...,
    init: ...
}) -->
import {loadingStart,loadingEnd,init} from './store'
//为什么直接传对象是可行的？connect内部做了处理，会使用bindActionCreators将其转化为函数
mapDispatchToProps = {
    loadingStart,loadingEnd,init
}
connect(mapStateToProps, mapDispatchToProps)(Comp)
在props中
const {fruits, loading, dispatch} = this.props;

异步行为：
redux-thunk 、redux-router(react-router-dom)
中间件/强化器
action -> 一系列中间件 -> reducer
import {applyMiddleware} from 'redux'
createStore(reducer,applyMiddleware(logger,thunk));

store.js
//普通的redux处理不了函数，只能处理action对象，要通过thunk中间件处理
export const asyncFetch = payload => {
    return dispatch => {
        dispatch({type: 'loading_start'});
        setTimeout(() => {
            dispatch({type: 'loading_end'});
            dispatch({type: 'init', payload});
        })
    }
}

import {BrowserRouter,Link,Route} from 'react-router-dom'

<BrowserRouter>
    <>
    <nav>
        <Link to='/list'></Link>
        <Link to='/add'></Link>
    </nav>
    <div>
    <Switch> //使用Switch代替exact，表示只匹配一个
        <Route path='/list' render=(() => ( //条件渲染, 如果要使用嵌套路由就不要使用exact关键字，不然匹配不到list/detail,只能匹配到list
            loading? (Comp1) : (Comp2)
        ))>
        <Route exact path='/add' component={FruitAdd}> //exact精确匹配 匹配/add 不匹配/add/aaa
        <Route component={()=><>页面不存在</>}>
    </Switch>
    
    <!-- <Redirect path='/list'> -->
    <div>
    </>
</BrowserRouter>

路由嵌套
function({match, history, location}){
    return (
        <div>{match.params.fruit}</div>
        <button onClick={history.goBack}>
        <Route path='/list/detail/:fruit' component={Detail}></Route>
        
    )
}

路由守卫：PrivateRoute高阶组件，使它有权限判断的功能
connect注入isLogin
const PrivateRoute = ({component: Component, isLogin, ...rest}){
    return (
        <Route
        {...rest}
        render={
            props=> isLogin ? (<Component {...props}> ) : 
            (<Redirect to={{pathname: '/login', state: {redirect: props.location.pathname}}}>) //state：传参，登录之后回跳
        }
        />
    )
}

connect注入isLogin, login
function Login ({location,isLogin,login}){
    const redirect = location.state.redirect || '/';
    if(isLogin) return <Redirect to={redirect}/> //如果登陆了直接跳转
    return (
        <Button onClick={login}>
    )
}

使用：
<PrivateRoute path="/add" component={FruitAdd} /> //需要守卫的路由
<Route path="/login" component={Login} />

combineReducers({fruit,user,...})
store/user.redux.js
export function login(user) {
    return (dispatch, getState) => {
        dispatch({type: ''})
    }
}

connect的默认参数
mapStateToProps = state => state
mapDispatchToProps={}