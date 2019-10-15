<template>
<div>
    <p>Comp1</p>
    sum:{{sum}}
    <br>
    {{a}} + {{b}} = {{sum}}

    <input type="button" value="a+5" @click="addA(5)"/>
    <input type="button" value="b+5" @click="addB(5)"/>
</div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
    methods:{
        ...mapActions(['setA','setB']),
        addA(a){
            this.setA(this.a + a)
        },
        addB(b){
            this.setB(this.b + b)
        }
    },
    computed:{
        ...mapState(['a','b']),
        ...mapGetters(['sum']),
    }
}
</script>

<style>

</style>