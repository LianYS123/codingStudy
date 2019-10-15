import Vue from 'vue/dist/vue.esm'
import '../css/style.css'

new Vue({
    el:'#root',
    data:{
       
    },
    components:{
        comp1:{
            data(){
                return {
                    classList:['divStyle','h1Style']
                }
            },
            template:`
                <div>
                    <h1 :class="classList">这是一个局部组件</h1>
                </div>
            `
        }
    },
    template:`
        <div>
            <comp1/>
        </div>
    `
})