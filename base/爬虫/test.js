(async() => {
    let path = require('path')
    let fs = require('fs')
    let request = require('./spider')
    let res = await request('https://list.tmall.com/search_product.htm?q=%CA%D6%BB%FA&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100&from=mallfp..pc_1_searchbutton')
    fs.writeFile(path.resolve(__dirname,'tmp/tmall_shouji.html'),res.body,err => {
        console.log(err)
    })
})()
