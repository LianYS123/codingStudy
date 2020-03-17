import Vue from 'vue'

function create(Component, props) {
    let vm = new Vue({
        render: h => h(Component, { props })
    }).$mount();  //不写具体元素

    //手动挂载
    document.body.appendChild(vm.$el);  //挂载真实dom
    let comp = vm.$children[0];  //拿到虚拟dom
    //定义清除方法
    comp.remove = () => {
        document.body.removeChild(vm.$el);  //移除真实dom
        vm.$destroy();    //销毁虚拟dom
    }
    return comp;
}
// Vue.prototype.$create = create;

export default create;