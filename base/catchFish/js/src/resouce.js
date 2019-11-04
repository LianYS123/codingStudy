function resouce(path){
    return new Promise((resolve,reject) => {
        let src = 'img' + path
        let oImg = new Image()
        oImg.src = src
        oImg.onload = function(){
            resolve()
        }
        oImg.onerror = function(){
            reject()
        }
    })
}