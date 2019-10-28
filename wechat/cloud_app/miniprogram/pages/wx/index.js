Page({
    data:{
        isLoading:false
    },
    showLoading(){
        wx.showLoading({
            title:'请等待'
        });
        setTimeout(function(){
            wx.hideLoading()
        },2000)
    },
    showToast(){
        wx.showToast({
            title:'ok',
            duration:2000
        })
    },
    showActionSheet(){
        wx.showActionSheet({
            itemList:['北京','上海'],
            itemColor:'blue',  //字体颜色
            success(res){
                console.log(res.tapIndex);  //用户点击索引 从0开始
            },
            fail(res){
                console.log(res.errMsg);  //fail cancel
            }
        })
    },
    showShareMenu(){
        wx.showShareMenu({
            withShareTicket:true,
            success(){
                console.log('success');
            }
        })
    },
    getUserInfo(){  
        wx.getUserInfo({
            success(res){
                console.log(res.userInfo);  //用户简单信息，包括昵称，性别，城市等
            },
            fail(res){
                console.log(res);
            }
        })
    },
    login(){//配合后台获取用户信息
        wx.login({//配合后台获取用户信息
            success(res){
                console.log(res.code);
            }
        })
    },
    scanCode(){//扫码，支持二维码、条形码
        wx.scanCode({
            success(res){
                console.log(res);  //res.result:www.lianys.top
            }
        })
    },
    setKeepScreenOn(){
        wx.setKeepScreenOn({
            keepScreenOn:true  //设置屏幕常亮
        });
        wx.setScreenBrightness({
            value:1  //设置屏幕亮度，1为最亮
        })
    },
    getBatteryInfoSync(){
        let info = wx.getBatteryInfoSync();
        console.log(info);  //{isCharging: true, level: 100, errMsg: "getBatteryInfoSync:ok"}
    },
    getFileSystemManager(){  
        let fs = wx.getFileSystemManager() //获取文件管理系统的引用
        console.log(fs);  //{saveFile: ƒ, saveFileSync: ƒ, getSavedFileList: ƒ, getSavedFileInfo: ƒ, removeSavedFile: ƒ, …}
    },
    downloadFile(){
        wx.downloadFile({
            url:'https://i.pinimg.com/originals/c6/b3/3d/c6b33d621e2e0aae158ae03dc0dd9df5.jpg',
            filePath:'1.jpg',
            success(res){
                console.log(res);
            },
            fail(err){
                console.log(err);//{errMsg: "downloadFile:fail permission denied, open "1.jpg""}
            }
        })
    },
    request(){
        wx.request({
            url:'https://i.pinimg.com/originals/c6/b3/3d/c6b33d621e2e0aae158ae03dc0dd9df5.jpg',
            method:'get',
            success(res){
                console.log(res); //数据在res.data中
            }
        })
    }
})