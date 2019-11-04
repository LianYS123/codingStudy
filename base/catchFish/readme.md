1. 载入素材：
function Resouce(path){
    return new Primise((reslove,reject)=>{
        ...
        success(){
            count == total resolve

            onload  res[name]={img}
        }
    })
}
自己解析json  :  eval("("+txt+")")

arr_src = {
    bottom: 'bottom.json',
    ...
}

加载的文件  resources.js   return imgs  throw new Error('')   / window.__g_resouce = imgs
Spirit 最基础的构建
img
宽高 w h
sx sy
x y
scale rotation

constructor(options){
    this.img = options.img
    this.sx = options.sx || 0
    this.sx = options.sy || 0
    this.speed = 0
    ...

    this.frame= 0
    this.max_frame = 4
    this.tick = 0
    this.max_tick = 0
}
draw(gd){
    save()
    gd.translate()
    gd.rotate()
    gd.drawImage(
        this.img,this.sy,this.w,this.h
        -this.w/2,-this.h/2,this.w,this.h
    )
    restore()
}
//做游戏的用物品的中心作为基点
move(){
    let speed_x = this.speed * sin()

    this.x+=speed
    this.y+=speed
}
setFrame(frame){
    this.sy=frame*this.h
}
    nextFrame(){
        this.tick++
        this.frame++
        if(max) this.frame = 0
    }

//鱼
Fish.js extends Spirit{
    constructor(type){
        if(type>5 || type < 1) {
            throw new Error('')
        }
        super({
            img
            sx,sy,
            w:,h

        })
 
    }
    draw(gd){
        this.rotation-=90
        super.draw()
        this.rotation=90
    }

}
next(){
    1.清除
    2.移动
    3.绘制
}