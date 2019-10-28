Page({
    data:{
        a:'form',
        lan:[
            {id:1,name:'java',value:'java'},
            {id:2,name:'c++',value:'c++'},
            {id:3,name:'python',value:'python'},
        ],
        sports:[
            {id:1,name:'basketball',value:'basketball'},
            {id:2,name:'soccer',value:'soccer'},
            {id:3,name:'badminton',value:'badminton'},
        ],
        rate:0
    },
    bindDateChange(e){
        console.log(e.detail.value);  //2019-10-26
        
    },
    radioChange(e){
        console.log(e.detail.value);  //java/c++/python  选中的value
    },
    checkChange(e){
        console.log(e.detail.value);  //一个选中元素的value的   数组
    },
    sliderChange(e){
        console.log(e.detail.value);  //从0到100的值
        this.setData({
            rate:e.detail.value
        })
    }
})