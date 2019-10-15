import Vue from 'vue'
import Parent from '../components/parent'
console.log(Parent);


new Vue({
    el:'#app',
    components:{
        Parent
    },
    template: `
        <div>
            <Parent/>
        </div>
    `
})