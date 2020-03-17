cube-tab-bar
<cube-slide :data="" :interval="5000">
created(){
    this.selectLabel = this.$route.path;
}
在router-view外面可以做动画
<transition
    @before-enter='',
    @after-enter='',
    @enter='',
    ...
>
<router-view/>
</transition>

可复用的动画：
<transition
    @before-enter='',
    @after-enter='',
    @enter='',
    ...
>
<div class='ball' v-show='show'>
    <div class='cubeic-add'>
<div>
</transition>

控制小球的动画
y轴贝塞尔曲线
x轴线性的变化
符合得到动画效果

激发页面的重绘，页面才可以播放
document.body.offsetHeight: 访问一下这个属性
afterEnter(){
    this.show = false;
    this.$emit('transitionend')  ->1
}

怎么用？
<cart-anim ref='ca'></cart-anim>

this.$refs.ca.start();

全局组件的设计与实现
import {createAPI} from 'cube-ui'
improt CartAnim from '';
createAPI(Vue,CartAnim,['transitionend'])  //transitionend:清理工作 ->2

创建实例：
this.$createCartAnim({
    //一个约定：配置中on-开头的是事件回调函数，会把on去掉
    onTransitionend(){  -> 3  
        //清理工作
    }
})

createAPI如何实现的？
//create.js
export default function(Component,props){
    const instance = new Vue({
        render(h){
            return h(Component,{props})  //渲染组件
        }
    }).$mount()  //执行了$mount() 方法,创建了一个未实际挂载的vue实例
    //手动挂载
    document.body.appendChild(instance.$el)   //拿到创建的vue的真实元素，挂载真实dom，而不是虚拟dom
    const comp = instance.$children[0];
    //提供一个清理函数：事情做完后一定要执行清理函数
    comp.remove = () => {
        document.body.removeChild(instance.$el)  //清除元素
        instance.$destroy();  //销毁vue实例
    }
    return comp;
}

使用:Vue.prototype.$create = import ...
this.$create(CartAnim,{
    在这里可以写一些props
    pos:{left:'50%'}
});
anim.start(el);
anim.$on('transitionend',anim.remove);

//路由的管理：路由是否可以后退(用于是否显示回退按钮)
const History = {
    _history:[],  //历史记录堆栈
    install(Vue){   //Vue.use(History)的时候这个方法会被调用，传入Vue
        Object.defineProperty(Vue.prototype,'$routeHistory',{
            get(){
                return History
            }
        })
    },
    push(path){
        this._history.push(path);
    },
    pop(){
        this._history.pop()
    },
    canBack(){
        return this._history.length > 0;
    }
}
//router.js
import History from 'util/History.js'
Vue.use(History)
Router.prototype.goBack = function(){
    this.back();
    this.isBack = true;
}
router.afterEach((to,from) => {
    if(router.isBack){
        History.pop();
        router.isBack = false;
        router.transitionName = 'route-back'  //动画
    } else {
        History.push(to.path);
        router.transitionName = 'route-forward'
    }
})

<Back v-if="$routeHistory.canBack()">

//具体实现看04，没有实现动画
