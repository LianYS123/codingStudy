安装： npm i -g typescript
typescript编译时检测：不能进行运行时检测
1. 类型
    变量、参数、返回值
    指明类型：
    1. 显式声明: let a:number;
    2. 类型推测（隐式声明） let a = 12;
    let a:string = 'abc'
    跟js一样，不区分整数和小数
    let a:any
    给函数的参数指明类型：
    function show(a:number, b:number){
        return a + b;
    }
    给参数的返回值加类型
    function show():number{
        return 1;
    }

    number/string/boolean/any
    数组类型：
    let a:number[] = [1,2,3];
    联合类型：
    let a:(number|string)字符串或数字

    let a = [12,true]; 隐式声明为any
    元组类型：
    [类型1，类型2]
    let a:[number,string]
    
    枚举：
    浪费代码就是浪费人生
    enum Gender(Male,Female);
    let gender:Gender = Gender.Male;

    void类型：
    function show():void{

    }
    null/undefined类型

    never类型：函数永远不会结束：抛出一个错

    json类型：
    let json:{a:number,b:number} = {a:12,b:11}

    let a:Array<number> 和 let a:number[] 完全一样

    js中 函数 return;是undefined 
    ts中 函数 return;是void 

2. 类
    新的写法
    访问修饰符：public|private|protected    
    class Person{
        name:string;
        age:number;
        constructor(name:string,age:number){
            
            this.name = name;//如果类内部没有声明name属性，会报错
            this.age = age;
        }
    }
    访问修饰符怎么用？最小访问原则

    简写方法：
    class Person{
        constructor(private name:string,private age:number){
        }
    }  

    static:静态成员
    const：不能同时用static和const

    存取器：编译不了es3,4
    get name():string{
        return  this._name;
    }
    set name(newName: string){返回值并不是void
        this._name = newName;
    }

    ts不支持函数重载。



3. 高级特性
    抽象、接口
    抽象类：只能作为父级使用
    abstract class Shape{
        abstract draw(gd):void 抽象方法不能有方法体，子类必须实现这个方法
    }

    class Rect extends Shape{
        draw(gd){

        }
    }
    class Circle extends Shape{
        draw(gd)
    }

    多态：
    let a:Shape;
    a = new Rect();
    a = new Circle();

    接口
    interface Shape(){

    }
    class Rect implements Shape{
        
    }
    实现不需要super()






npm i typescript ts-loader -D
resolve:{
    extensions:['ts','tsx']
},
modules:{
    rules:[
        {
            test:
            use:['ts-loader']
        }
    ]
}

tsc --init ： 生成tsconfig.json文件