const {craw,fetchBySelector,fetchFile} = require('crawler-lian');

let link = `https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=9000`;

craw(link,{jQuery:false,row:true}).then(res => {
    // console.log(res.body.toString())
    JSON.parse(res.body.toString()).data.forEach(item => {
        let {casts,title,url,cover,id,star,rate,directors} = item;
        // console.log({casts,title,url,cover,id,star,rate,directors});
        fetchBySelector(url,{
            selectors:[
                {
                    selector:'#info > span[property="v:genre"]',
                    name:'tags',
                    process({matchs}){
                        return matchs.join('|')
                    }
                },
                {
                    selector:'#info > span[property="v:initialReleaseDate"]',
                    name:'time'
                },
                {
                    name:'evaluate',
                    selector:'#link-report > span[property="v:summary"]'
                }
            ],
            process({matchs}){
                return matchs[0]
            }
        }).then(({data}) => {
            console.log({...data,casts,title,url,cover,id,star,rate,directors});
        })
    })
})