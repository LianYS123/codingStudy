export default function ({ redirect, store }) {//直接将store结构出来
    if (!store.state.user.token) { //如果token不存在，则没有登录
        redirect("/login")  //重定向到登录页
    }
}