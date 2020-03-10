export const HOST = 'localhost';
export const PORT = 8080;
export const baseURL = `http://${HOST}:${PORT}`;
export const categroy =
    [
        {
            name: "风格",
            value: "style",
            isShow: true,
            children: [
                {
                    name: "全部",
                    cate: "style",
                    value: ""
                },
                {
                    name: "剧情",
                    cate: "style",
                    value: "剧情"
                },

                {
                    name: "喜剧",
                    cate: "style",
                    value: "喜剧"
                },

                {
                    name: "动作",
                    cate: "style",
                    value: "动作"
                },
                {
                    name: "爱情",
                    cate: "style",
                    value: "爱情"
                },
                {
                    name: "恐怖",
                    cate: "style",
                    value: "恐怖"
                },
                {
                    name: "动画",
                    cate: "style",
                    value: "动画"
                }
            ]
        },
        {
            name: "类型",
            value: "type",
            isShow:false,
            children: [
                {
                    name: "全部",
                    cate: "type",
                    value: ""
                },
                {
                    name: "番剧",
                    cate: "type",
                    value: 1
                },

                {
                    name: "电影",
                    cate: "type",
                    value: 2
                },

                {
                    name: "纪录",
                    cate: "type",
                    value: 3
                },

                {
                    name: "国创",
                    cate: "type",
                    value: 4
                },
                {
                    name: "电视",
                    cate: "type",
                    value: 5
                }
            ]
        },

        {
            name: "地区",
            value: "area",
            isShow:false,
            children: [
                {
                    name: "全部",
                    cate: "area",
                    value: ""
                },

                {
                    name: "大陆",
                    cate: "area",
                    value: "大陆"
                },

                {
                    name: "香港",
                    cate: "area",
                    value: "香港"
                },

                {
                    name: "台湾",
                    cate: "area",
                    value: "台湾"
                },

                {
                    name: "美国",
                    cate: "area",
                    value: "美国"
                },

                {
                    name: "日本",
                    cate: "area",
                    value: "日本"
                },

                {
                    name: "韩国",
                    cate: "area",
                    value: "韩国"
                }
            ]
        }
    ]

export const cateValues = categroy.map(item =>item.value);