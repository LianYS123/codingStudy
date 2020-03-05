//postcss 必须要,所有post相关插件放在这
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins:[
        autoprefixer({
            grid: true,
            browsers:[
                '> 1%',
                'last 3 versions',
                'android 4.2',
                'ie 8'
            ]
        })
    ]
}