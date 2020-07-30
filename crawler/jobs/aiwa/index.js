const agent = require('superagent');
const db = require('./db');
const fs = require('fs');
let i = 1;
function next(){
    setTimeout(() => {
        fetch(i++);
        if(i < 13){
            next();
        }
    }, 300);
}
next();
let set = new Set();
db.select('aiwa',['uniqueName']).then(rows => {
    rows[0].map(row => set.add(row.uniqueName));
}).then(next())
function fetch(index){
    agent.post('https://aiwa.ae/api/services/app/search/GetSearchResults')
        .send({ query: "healthcare", searchField: "", sortByField: "relevance", filters: "", pageIndex: index, pageSize: 50 })
        .set('Cookie', `__cfduid=deba0176c9d87eaa6dfafc48f56e3ebd71587893464; ASP.NET_SessionId=vgydp1o5inxvcx34teac3lvo; _ga=GA1.2.2021295841.1587893468; _gid=GA1.2.1209933904.1587893468; _fbp=fb.1.1587893474656.1341628385; _gat=1`).then(res => {
            console.log('*'.repeat(100));
            res.body.result.result.items.forEach(item => {
                let {nameEng,primaryPhone,primaryEmail,primaryWebsite,uniqueName,logo,address} = item;
                if(set.has(uniqueName)) return;
                db.insert('aiwa',{nameEng,primaryPhone,primaryEmail,primaryWebsite,uniqueName,logo,address}).catch(err => {
                    console.error(err);
                    fs.appendFile('./err.log',err+'\n',err => {
                        if(err){
                            console.log(err);
                        }
                    })
                });
                console.log(nameEng);
            })
        }).catch(err => {
            fs.writeFile('./err.log',err,err => {
                if(err){
                    console.log(err);
                }
            })
        })
}


