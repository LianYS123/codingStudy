
错误的暴露方法:
export default {
    host: 'localhost',
    port: 8080
}
正确的暴露:
export const host = 'localhost'
export const port = 8080

解决js控制路由跳转 路由内的组件不更新问题：
1. 给Router加一个key   key={}
2. 路由不要放到子路由中，放到最外层组件中
3. history.push() 一律是往主域名(localhost:8080)/ 后面加，不会往当前路径名后面加
4. history.push() 不能控制当前Router之外的路由跳转
如何解决？使用路由的自动向后匹配(不使用exct),然后/page/2/modify/2233会自动匹配到/page/2,原始页面不消失

每一个Router是一个独立的容器，同一个Router下只会路由进一个容器(不会同时显示两个组件)

Expected an assignment or function call and instead saw an expression  no-unused-expressions

报错原因 return 换行没加括号
return 
<div>
...
</div>

所有的页面用路由跳转，组件可以用state控制

事件传参方法 onClick = { e => callback(e,args...) }

formData对象不能被console.log()输出
formData输出为空 console.log(formData):  formData：是不能转换为字符串的,虽然输出为空，但实际上是有数据的


React 解决fetch跨域请求时session失效


