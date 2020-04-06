const groups = require('./groups')

const option = {
    //全局配置写在这
    deDuplication: false,  //是否去重
    selector: 'a', //默认选择器
    attr: 'text', //默认选择的属性
    trim: true, //是否去前后空格
    handler: null,  //处理器，处理选中的具体元素
    process: null,  //处理选择器选中的一个数组,返回新的数据或者一个promise对象
    test: null, //测试标准，传入一个正则表达式
    filter:null, //过滤器，与test功能相同，传入一个函数
    groups, //分组爬取, 如果和selector同时存在，会覆盖selector
    itemProcess: null  //处理一组数据
}

module.exports = option;