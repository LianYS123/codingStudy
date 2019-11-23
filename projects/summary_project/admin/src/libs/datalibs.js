import {host,port} from '../config'
let BASE = `http://${host}:${port}`

export default {
    async get(url){
        let result = await fetch(`${BASE}/${url}`,{
          // credentials: 'include',
        })
        let res =  await result.json()
        return new Promise((resolve,reject)=>{
            if(res.ok){
              resolve(res.data)
            }
            else {
              reject(res.err)
            }
        })
    },
    async del(url){
        let result = await fetch(`${BASE}/${url}`,{method:'DEL'},{
          // credentials: 'include',
        })
        let res =  await result.json()
        return new Promise((resolve,reject)=>{
            if(res.ok){
              resolve(res.data)
            }
            else {
              reject(res.err)
            }
        })
    },
    async post(url,form){
        let result = await fetch(`${BASE}/${url}`,{
          method:'POST',
          body:form,
          // credentials:'include'
        })
        let res =  await result.json()
        return new Promise((resolve,reject)=>{
            if(res.ok){
              resolve(res.data)
            }
            else {
              reject(res.err)
            }
        })
    }
}