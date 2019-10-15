import Vue from 'vue/dist/vue.esm'
import axios from 'axios';
let path = require('path');
let querystring = require('querystring')

Vue.prototype.axios = axios //如果用Vue.use(axios)会报错
new Vue({
    el: '#root',
    data: {
        username: '',
        password: ''
    },
    async created() {
        //let res = await axios.get(path.resolve(__dirname,'../data/user.json'));

        let res = await axios({
            url: "http://127.0.0.1:8080/user",
            method: 'post',
            data: { a: 1, b: 2 },
            transformRequest: [
                function (data) {
                    return querystring.parse(data) //将json转成 a=1&b=2的querystring的形式提交 
                }
            ]
        })

        let user = res.data;

        this.username = user.username;
        this.password = user.password;
    },
    template: `
       <div>
            username:{{username}} <br>
            password:{{password}}
       </div> 
    `
})