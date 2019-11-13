移动端：
web 原生 混合 编译

rn：编译式的

react-native:
1. 不是网页,html标签不能用，css样式不能用 
2. React和JS几乎完全支持

安装：
1. jdk 1.8 必须是1.8
2. Adnroid Stuido
3. yarn
npm i -g yarn
yarn config set registry https://registry.npm.taobao.org

AppData/Local/Android/Sdk   android_home
react-native-cli
npm i -g react-native-cli
react-native init name
运行：
react-native run-android/ios

目录：
adnroid：原生java 文件
App.js
常用组件：
rn里面没有inline 都是block
<View>  div
<Text>  所有的文件必须在这个标签里面
<Picker> 选择器
    <Picker 
        selectedValue={this.state.income}  //income 0
        onValueChange={value=>{this.setState({income:value})}}
        >
        <Picker.Item label="支出" value={0}>
    <Picker>
<TextInput onChangeText={text=>setState({title:text})} placeholder='请输入' keyboardType='number-pad'> 
    keyboardType 键盘类型

<Button onPress={()={}} title='提交'>
Alert.alert('title','message',[{text:'确定'}])  数组里面放按钮


样式
<Text style={{color:'red', backgroundColor:'green'}}>
textAlign:'center'
lineHeight:80
RN 没有浮动布局，主要依赖flex布局
单位：两个单位：
绝对值：width:800
百分比：

import {Dimensions} from 'react-native'  //尺寸

const BASE_WIDTH = 750
export function calc(size){
    let {width} = Dimentsions.get('window')  //获取window宽度
    size * width / BASE_WIDTH
}

利用calc来适应宽：
import {Dimensions} from 'react-native'
const BASE_WIDTH = 750
exportfunction calc(size){
    Dimensions.get('window') // 获取应用宽度
    return width/BASE_WIDTH * size
}
width:calc(300)

flex布局
子元素自动填满父级空间

<View Style = {{flexDirection:'row'}}>
    <Text style={{flex:1}}>
    <Text style={{flex:2}}>
</View>

justifyContent:'flex-start'/'flex-end'

import {Actions,Router,Scene,Lightbox} from 'react-native-router-flux'
Actions 所有的 路由跳转都要他
Actions.push()
Actions.pop()

Lightbox
在Router里面，在其他元素外面
Lightbox下面的第一个子元素才是子页面

async loadData(){
    ...
}
async shouldSomponentUpdate(nextProps,newxState){  //要不要触发componentDidUpdate
    return JSON.stringify(this.state.accounts)!=JSON.stringify(nextState.accounts);
}
async componentDidUpdate(){ state变化会引发这个函数执行，
    loadData()
}
sum.toFixed(2) 保留两位小数

模拟器刷新：rr

<View style={styles.bg}>
StyleSheet:StyleSheet.creat({
    bg:{backgroundColor:'#...'}
})

跳转：
yarn add react-native-router-flux   简称rnrf
能够把所有的整合到一个路由表里面跳转
import {Router,Scene}
路由逻辑都包在Router里面，Scene：容器
所有Router里必须只有一个Scene
<Router>
    <Scene key="root">
        <Scene key="startup" component={} initial={true} >
    </>
</Router>
Router
    Scene key initial={true} 开始就加载的页面 hideNavBar={true}隐藏默认导航
        Scene key

Actions from 'react-native-router-flux'
Actions.push('这里放key',{放props})

图片：
Image source={require()}

import {FlatList} from 'react-native'
用来做循环，性能高
是一个单标签
state={records={数据}}
<FlatList
    data={this.state.records}
    keyExtractor={item=>item.ID+''}  加key:将字符串里面的东西转化成key
    renderItem={({item,index})=>(<Text>{item.catalog}</Text>)}
/>
Alert.alert('标题','message',[{text:'ok'}])

const {catalog,incoem,...} = ctx.query;
const time=Math.floor(Date.now()/1000)
select * from table orderby id desc

<Button color="#2d7afc" title="记一笔" onPress{this.showAddDialog.bind(this)}>
showAddDialog(){
    Actions.push()
}

import {Lightbox} from 'react-native-router-flux'
下面的第一个子节点会认为是Scene,其他的都会当做Dialog来用
<Lightbox>
    <Scene key>
</>
<Picker 
    selectedValue={this.state.income}
    onValueChange={(value,index)=>this.setState({income:value})}
></>
<Picker.Item label="支出" value={0}>
<Picker.Item label="收入" value={1}>


<TextInput
    placeholder="备注"
    onChangeText={text=>setState({comment:text})}
    keyboardType="number-pad"  //数字键盘
/>
<View>
    <View><Button></>
    <View>button</>  取消 Actions.pop()
</View>

utils  common.js
export function joinQuery(data){
    let arr = []
    for(let name in data){
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
}
submit(){
    let res = await fetch(BASE+'/add?'+joinQuery({}))

}
totalIncome(){
    this.state.record.forEach(({income,amount})=>{
        if(income){
            sum+=amount
        }
    })
    return sum.toFixed(2)
}

页面
AddDialog,List,StartUp

npm run start 报错：
Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\
解决
You can correctly terminate the regular expression in you case by changing the file located a:
\node_modules\metro-config\src\defaults\blacklist.js
From:
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
To:
 var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
注意：当执行yarn add xxx 后，可能会把这个正则内容该回到原来的状态，再次报这个错，改回来就行了


无法在模拟器上面运行的问题：模拟器的问题，该有真机测试就没有问题了

真机测试如何刷新？控制台如何调出？摇一摇

给Button直接加样式没有用，要把它包在一个View中
