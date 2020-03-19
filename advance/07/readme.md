
//创建：基于ts的vue项目
vue create project  
选项：
Manually select features 添加ts支持
基于类的组件 -y
tslint

ts都是开发时依赖

声明组件
import {Component,Prop,Vue} from 'vue-property-decorator';
@Component
export default class Hello extends Vue {
    //感叹号是给编译器看的，说明未来一定会赋值,required是为了给Vue看的
    //也可以写type，也是给vue看的，真正传值检测的时候是按Vue的类型检查的，ts类型只用于编译阶段
    @Prop({required:true,type:String}) msg!: string;  
    //data中的值直接以类的字段的方式写
    private features=['aaa','bbb'];   //要加上private，说明自己用
    private create(){  //生命周期

    }
    //派发事件
    //事件名为add-feature，如果要指定：@Emit('eventname')
    @Emit()
    private addFeature(event){   //若唯有返回值行惨作为事件参数
        return feature;  //返回值会作为事件参数
    }
    //@add-feature="..."

    //监听
    @Watch('feature',{deep:true})
    onfeatureChange(){

    }
}

ts 
let names:string[]
let list: any[] = [...];
let name: string | object
//这里前两个两个参数必须传
//如果要变为可选参数，要加上问号
//可选参数必须在后面
function func(name:string,age:number,addr?:string){  

}

关于测试：
使用Mocha + Chai 或者jest
Mocha:运行测试
Chai: 写测试
jest: 都有
创建项目记得选测试

写测试
test/unit/aaa.spec.js
function add(num1,num2){
    return num1 + num2
}
describe(...)

//覆盖率
stmts:语句
branch：分支
func：函数
lines：