let Crawler = require('crawler')
let c = new Crawler({
    callback(err,res,next){
        if(err){
            console.log(err)
        } else {
            let $ = res.$
            // console.log($('title').text())
            let arr = []
            $('#J_ItemList').find('.product').each((index,op)=>{
                op = $(op)
                let href = op.find('.productImg-wrap').find('a').attr('href')
                let imgSrc = op.find('.productImg-wrap').find('img').attr('src')
                let price = op.find('.productPrice').find('em').attr('title')
                let productTitle = op.find('.productTitle').find('a').attr('title')
                let productShop = op.find('.productShop').find('.productShop-name').text()
                let res = {
                    href,
                    imgSrc,
                    price,
                    productTitle,
                    productShop,
                }
                arr.push(res)
            })
            console.log(arr)
        }
        next()
    }
})
c.queue('https://list.tmall.com/search_product.htm?q=%CA%D6%BB%FA&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100&from=mallfp..pc_1_searchbutton')

