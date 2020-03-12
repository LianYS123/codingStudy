创建项目 3.x
npm i -g @vue/cli
vue create project-name
npm run serve
npm run build

new Vue({
    render: h => h(App)
})

//设置事件总线用于共享数据
Vue.prototype.$bus = new Vue();
this.$bus.$emit()
this.$bus.$on()

watch:{
    cart:(newVal,oldVal){
        //...
    }
    //深度监听
    cart:{
        deep:true,
        handler(newValue){

        }
    }
}

//组件的设计与开发
vue add element-ui

<el-form ref="form" :model="form" rules="rules">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
rules:{
    username:[{required:true,message:""}]
}

Form 
    FormItem 数据校验、标签
        Input 数据

双向数据绑定
在子组件中 <input :value="value" @input="onInput">
派发事件：$emit('input',e.target.value)

父组件中
<child :value="model.username" @input="model.username=$event"> 相当于 <child v-model="model.username>

插槽：
form-item
<label>
默认插槽
<slot>
//错误信息
<p>

具名插槽
<template v-slot:foo>  子组件中<slot name="foo"></slot>

组件命名推荐肉串命名法

//跨层级传参
privide(){
    return {
        form:this
    }
}
inject:

input组件中通知要校验 this.$parent.$emit('validate')
form-item 接收事件进行校验 created(){ this.$on('validate',this.validate) }

校验器
cnpm i async-validate
import Validator from 'async-validator';

校验
inject:['form']
methods:{
    validate(){
        //为了执行异步校验，返回一个Promise
        return new Promise(resolve => {
            //校验规则
            const descriptor = {
                [this.prop]: this.form.rules[this.prop]
            }
            //创建校验器
            new Validator(descriptor);
            //通过this.prop指定校验规则
            validator.validate({[this.prop]:this.from.model[this.prop]},errors=>{
                if(errors){
                    this.errorMessage = errors[0].message;
                    //校验失败 resolve(false)
                } else {
                    this.errorMessage = "";
                    //校验成功 resolve(true);
                }
            })
        })
    }
}

//全局校验
form中执行所有校验
methods:{
    validate(cb){
        //拿到要校验的item
        tasks = this.$children.filter(item => item.prop)
        .map(item => item.validate());  //拿到primose数组
        const results = await Promise.all(tasks);
        //只要有一个校验失败就失败
        if(results.some(valid => !valid)){
            //校验失败
            cb(false);
        } else{
            cb(true);
        }
    }
}


    