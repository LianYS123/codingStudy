const fs = require('fs')

module.exports = {
    unlink(path){ //删除文件
        return new Promise((resolve,reject)=>{
            fs.unlink(path,err=>{
                if(err){
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    },
    exist(path){ //判断文件是否存在
        return new Promise((resolve,reject)=>{
            fs.stat(path,err=>{
                if(err){
                    resolve(false)
                } else{
                    resolve(true)
                }
            })
        })
    },
    appendFile(path,data){ //文件添加内容
        return new Promise((resolve,reject)=>{
            fs.appendFile(path,data+'\n',err=>{
                if(err){
                    reject(err)
                } else{
                    resolve()
                }
            })
        })
    },
    rename(source,dest){
        return new Promise((resolve,reject) => {
            fs.rename(source,dest,err=>{
                if(err){
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

}