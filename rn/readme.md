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
react-native run android/ios

目录：
adnroid：原生java 文件
App.js
常用组件：
rn里面没有inline 都是block
<View>  div
<Text>  所有的文件必须在这个标签里面

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
width:calc(300)

flex布局
子元素自动填满父级空间

<View Style = {{flexDirection:'row'}}>
    <Text style={{flex:1}}>
    <Text style={{flex:2}}>
</View>

justifyContent:'flex-start'/'flex-end'
