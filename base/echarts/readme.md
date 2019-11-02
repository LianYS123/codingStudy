Raphael
path.attr('','')
path.attr({
    'transform':'r30'   /r t s   r:rotate   t:translate   s:scale    s2,1r30 先旋转30deg再横向放大2倍
})

容器：div.box
let chart = echarts.init()
let option = {
    title:{
        text:'主标题',
        subtext:'副标题'
    },
    legend:{// 图例
        data:['男','女'],
        right:0,
        top:'50%',
        orient:'vertical' //朝向
    },
    xAxis:[ // x轴，可以有很多
        {   
            type:'category',
            data:['一月'...]
        }
    ],
    yAxis:[
        {
            type:'value'
        }
    ],
    series:[//系列
        {
            name:'男',
            type:'bar',
            data:[785,23,934]
        },
        {
            name:'女',
            type:'bar',
            data:[84,234,934]
        },
    ]
}
chart.setOption(option)


饼图：
{
    title:{

    },
    series:[
        {
            name:'性别比例',
            type:'pie',
            data:[{},{}]，
            radius:'20%', //可以给数组[内半径,外半径]
            center:['30%','50%']
        },
        {
            name:'年龄比例',
            type:'pie',
            data:[{},{}]
        }
    ]
}
饼图和柱状图可以叠在一起
雷达图：游戏里面的那个：
雷达图：
特有属性
radar:{
    indicator:[
        {name:'hp',max:9999},
        {name:'攻击力',max:99},
    ]
}

js控制echarts 
let chart = echarts.init(obox)
let chart2 = echarts.init(oRight)
chart.setOption(option)
chart.on('mouseover',function (ev){
    setCty(ev.name)
})

d3极其复杂
