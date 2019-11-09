
错误的暴露方法:
export default {
    host: 'localhost',
    port: 8080
}
正确的暴露:
export const host = 'localhost'
export const port = 8080

解决js控制路由跳转 路由内的组件不更新问题：
给Router加一个key   key={}

Expected an assignment or function call and instead saw an expression  no-unused-expressions

报错原因 return 换行没加括号
return 
<div>
...
</div>

所有的页面用路由跳转，组件可以用state控制