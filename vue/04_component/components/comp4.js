import Vue from 'vue/dist/vue.esm'

export default Vue.component('comp4',{
    template:`
        <div>
            <h1><slot name="title"/></h1>
            <p>
                <slot/>
            </p>
        </div>
    `
})