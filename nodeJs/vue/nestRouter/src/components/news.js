export default {
    template:`
    <div>
        <router-link :to="{name:'news1'}">to news1</router-link>
        <router-link :to="{name:'news2'}">to news2</router-link>
        <div>news</div>
        <router-view></router-view>
    </div>
    `
}