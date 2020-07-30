Promise.resolve().then(() => {
    console.log('test1'); 
    return new Promise(() => {});
}).then(() => console.log('test')).catch(console.error);