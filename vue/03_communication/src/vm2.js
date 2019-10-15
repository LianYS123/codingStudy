import Vue from 'vue/dist/vue.esm'
let path = require('path');


new Vue({
    el:'#root',
    data:{
        username:'',
        password:''
    },
    async created(){
        // let res = await fetch(path.resolve(__dirname,"../data/user.json"))
        // let form = new FormData();
        // form.append('a','aaa')

        // let res = await fetch('http://127.0.0.1:8080/user',{
        //     method: 'post',
        //     body: form
        // })


        // let user = await res.json();
        // this.username = user.username;
        // this.password = user.password;
    },
    methods: {
        async fn_submit(){
            let form = this.$refs.form;
            let formData = new FormData(form);
            let res = await fetch(form.action,{
                method:form.method,
                body:formData
            })
    
            let user = await res.json();
            this.username = user.username;
            this.password = user.password;
        }
    },
    template:  `
       <div>
            username:{{username}} <br>
            password:{{password}} <br>

            <form ref="form" action="http://127.0.0.1:8080/user" method="post">
                name:<input type="text" name='name'> <br>
                age: <input type="text" name='age'> <br>
                <input type="submit" @click.prevent='fn_submit'>
            </form>
       </div> 
    `
})