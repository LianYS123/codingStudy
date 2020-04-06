

// require('./libsTest')

for(let i = 0; i < 10; i ++){
    new Promise(resolve => {
        console.log(i + '----')
        setTimeout(() => {
            if(i % 2 === 0) resolve(i)
        }, 100);
    }).then(console.log)
}