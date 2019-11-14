import {Alert} from 'react-native'

const port = 8080
const host = '192.168.43.145'
const BASE = `http://${host}:${port}/` 
export default {
    async get(url){
        try{
            let result = await fetch(BASE + url)
            let res = await result.json()
            if(res.ok) {
                return res.data
            } else{
                console.log(res.err)
                Alert.alert('提示','数据加载出错',[{text:'ok'}])
            }
        } catch(e){
            console.log(e)
            Alert.alert('提示','数据加载出错',[{text:'ok'}])
        }

    },
    async post(){

    }
}