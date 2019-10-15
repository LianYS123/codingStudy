import Vue from 'vue/dist/vue.esm'
import '../css/style.css'

import comp3 from '../components/comp3'
import comp4 from '../components/comp4'

Vue.component('comp2',{
    data(){
        return {
            classList:['divStyle','h1Style']
        }
    },
    template:`
        <div>
            <h1 :class="classList">这是一个全局组件</h1>
        </div>
    `
})

new Vue({
    el:'#root',
    data:{
        type:"c3"
    },
    components:{
        //注册组件
        //只要引了，没注册也能用？
        c3:comp3,
        c4:comp4
    },
    template:`
        <div>
            <comp2/>
            <c3/>
            <hr/>
            <p>动态组件aaa</p>
            <compoment is="comp2"/>
            <compoment :is="type"/>
            <hr/>
            <p>插槽</p>
            <c4>
            <template slot="title">这是一个带插槽的组件</template>
            啊啊啊啊啊啊啊啊啊啊啊啊啊
            </c4>

        </div>
    `
})