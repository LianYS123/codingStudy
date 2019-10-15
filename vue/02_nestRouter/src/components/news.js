export default {
    template: `
    <div>
        <router-link :to="{name:'news1'}">to news1</router-link>
        <router-link :to="{name:'news2'}">to news2</router-link>
        <div>news</div>
        <router-view></router-view>
    </div>
    `
}
import news1 from './news1';
import news2 from './news2';

export let router = [
    {
        path: 'news1',
        name: 'news1',
        component: news1
    },
    {
        path: 'news2',
        name: 'news2',
        component: news2
    }
]