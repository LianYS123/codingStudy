import axios from 'axios'

export default {
    login(userInfo){
        return axios.get('/api/login',{params:userInfo}).then(res => {
            return res.data
        })
    }
}