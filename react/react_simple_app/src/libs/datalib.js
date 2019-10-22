const SERVER = 'http://localhost:8080/'
let fix = (result,success,error) => {  //统一错误处理
    try{
        if(result.error){
            let e = result.error
            alert('错了')
            console.log(e);
            error && error(e)
        } else{
            success && success(result)  //数据请求成功，执行成功回调函数
        }
        return result;
    } catch(e){
        console.log(e);
        alert('错了')
        error && error(e)
    }
}
export default {
    async get(url,success,error){
        let res = await fetch(SERVER + url)
        let result = await res.json()
        return fix(result,success,error)
    },
    async post(url,data,success,error){
        let form = new FormData();
        for(let field in data){
            form.append(field,data[field])
        }
        let res = await fetch(SERVER + url, {
            method:"post",
            body:form
        })
        let result = await res.json()
        return fix(result,success,error)
    }
}