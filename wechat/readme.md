微信：
公众号：
1. 订阅号：每天群发1次，折叠
2. 服务号：每月群发4次，功能强大；好友列表
3. 企业微信：一般用不了


小程序：强大、无法脱离微信

基本功能：网络、媒体、文件操作
数据：位置、用户数据、设备信息
微信：支付、生物识别(指纹)、微信运动、卡券、客服、二维码
社交:微信转发、QQ转发



注册、下载微信开发者工具、创建项目

小程序分两层：
app层：整个程序共享
page层：

小程序跟微信非常像
wx:for="a in arr" wx:for-item="item"
wx:if = "b"

----------------------------------------------------
html、css、js、
wxml、wxss、js、json

可以使用测试账号

普通模板

必须用wxml自定义的标签：
全局支持class和style属性，不支持id属性。
内部基于jsx，标签必须自封闭

contact-button 呼叫客服按钮
view 相当于div
text 行内  span?
button 按钮： <button bind:tap='fn'>  size='mini'  type='primary/warn' from-type='submit' 注意：函数名不要加括号
scroll-view:滚动视图    属性：scroll-y=true 
swiper   : banner视图  轮播图？
icon：    微信标准图标：  type="success" size="600"
image  <image src="">
video   <video src="">
audio  <audio src="">
navigator  <navigator url="/pages/page1/index">To page1</navigator>  跳转
progress <progress percent="80" active />  进度条：active：自动增长
form
    input
    radio :包在radio-group里面
    checkbox:checkbox-group
    button 按钮
    switch 开关
    slider 滑块
    picker 选择  属性： range='数组'  将view包在里面作为显示选项<view>{{arr[]}}</view>  bindchange='fn'  mode模式 mode='region'地区，date等      fn里面：e.detail.value
map  地图
canvas  绘图
ad 广告



wsxx中新的单位 : rpx
任何手机满宽是750px



循环输出
<view wx:for='{{arr}}' wx:key="{{index}}">
arr[index]
</view>

注意：text标签里面不要包含view标签，不会显示
index是微信自带的，不用定义



app里面生命周期函数
App({
onLanuch(){

},
onShow(){

},
onHide(){

},
onError(){

},
onPageNotFound(){

}
})

在index中调用app中的数据：
let app = getApp()  //getApp是一个全局函数
在生命周期中：app.a, app.user

函数中更改data数据：类似React的state
fn(e){  //不能有其他参数

    this.setData({
        a:1
    })
    console.log(this.data.a)
}


wx：内置属性，所有的微信的功能都在这里面
wx.showLoading({
    title:'请等待'
})
wx.hideLoading();隐藏Loading
wx.showToast({//对勾的大对话框
    title:'',
    icon:'none/loading',
    duration:300  //300毫秒
})
wx.showActionSheet({//类似picker
    itemList:['北京','上海',]
    itemColor
    success(index){
        console.log(index)  //选择的索引
    }
})

wx.showShareMenu({//显示分享菜单
    withShareTicket: true,
    success(){
        console.log('分享成功')
    }
})
wx.getUserrInfo({//获取用户所有数据
    success(res){
        console.log(res)
    },
    fail(){
        console.log('失败')
    }
})
wx.login({//配合后台获取详细信息
    success(res){
        console.log(res.code);  //code：发给服务器，让服务器获取用户数据
    }
})

wx.scanCode({
    success(res){
        res.result //地址
        res.scanType  //类型，条形码还是二维码
    }
})

wx.setKeepScreenOn({  
    keepScreenOn: true //设置屏幕常亮
})
wx.setScreenBrightness({
    value:1  //设置屏幕亮度,0最暗，1最亮
})

let obj = wx.getBatteryInfoSync() //获取电量，有异步版和同步版
wx.connectWifi({//连接wifi
    SSID:'',  //wifiid
    password:'',//密码
    success(res){
        //成功
    }
})
wx.startSoterAuthentication({
    requestAuthModes:['fingerPrint','speech'],//指纹，声纹
    challenge:''//挑战因子
})
const fs = wx.getFileSystemManager();  //文件管理器的引用
fs.writeFile({
    filePath:'a.txt',
    data:'aabbcc',
    success(res){

    },
    fail(res){

    }
})

wx.downloadFile({//文件下载
    url:'',
    filePath:'1.png',
    success(){

    }
})

//蓝牙
wx.startBluetoothDeviceDiscovery({//设置蓝牙可以发现别人
    success(res){

    },
    fail(res){

    }
})
wx.stopBluetoothDeviceDiscovery({//关闭

})
wx.getBluetoothDevices({//获取已知设备

})

//数据通信,没有跨域的问题  
wx.request({
    url:'',
    data:{},
    method:'get',
    dataType:'json',
    success(res){
        log(res.data...)
    }
})
//微信不支持promise 
开发者文档
code2session
要一个请求地址
https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ID&corpsecret=SECRECT
https://qyapi.weixin.qq.com/cgi-bin/miniprogram/jscode2session?appid=	
wx0df2615da9a8a7f7&js_code=023DJb3B0qGp1i2BsY5B0kE33B0DJb3Q&grant_type=authorization_code
改什么？ APPID  SECRET JSCODE就是用res.code

返回一个{
    'session_key':'',
    'openid':'',
    unionid//如果多个小程序，共享
}

用户：
session_key:会话id，会变得
openid：用户ID，不会变得
access_token：令牌，会变



