import Vue from 'vue'

export default Vue.component('Child',{
    props:['parent'],
    data(){
        return {
            num:0
        }
    },
    methods:{
        parentAdd(){
            this.parent.num++;
        }
    },
    created(){
        this.$on('add',function(n){
            this.num += n;
        })
    },
    template:`
        <div>
         子组件{{num}}<input type='button' @click='parentAdd()' value='+1'/>
        </div>
    `
})