import {host,port} from '../config'
let domain = `http://${host}:${port}`

export default {
    async get(url){
        let result = await fetch(`${domain}/${url}`)
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