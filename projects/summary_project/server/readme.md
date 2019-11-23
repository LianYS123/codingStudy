web、移动端、微信小程序、服务端

koa koa-router koa-better-body koa-convert koa-static koa-session mysql co-mysql uuid

1、配置、分离

libs
    regexp.js
        module.exports{
            page:/^\d+/
        }
    vaildater.js
        test(value,re,required=true){
            if(require && !value){
                throw 'cuole'
            } elxe {
                if(typeof re == 'string'){
                    re = regs[re]
                }
                if(!re.test(value)){
                    throw ''
                }
            }
        }
    database.js
        module.exports=db
        db.getById = async function(table,id,fields='*'){
            let rows = await db.query('select ${fields} from ${table} where id=?')
            if(rows.length = 0){
                throw 'no data'
            } else {
                return rows
            }
        }
        db.delById = async function (table,id) {
            await db.query('delete from ${table} where id=?)
        }
    notice.js
        module.exports = function(msg){
            return new Promise((resolve,reject)=>{
                fs.appendFile()
            })
        }
    fs.js
        module.exports = {
            unlink(path){ //删除
                return new Promise((resolve,reject)=>{
                    fs.unlink(path,err=>{
                        if(err){
                            reject()
                        } else {
                            resovle()
                        }
                    })
                })
            },
            exsits(path){
                return new Promise((resolve,reject)=>{
                    fs.stat(path,err=>{
                        if(err){
                            resolve(false);
                        } else {
                            resolve(true)
                        }
                    })
                })
            }
        }
        
router
    api.js   要数据整理
        const CAR_PAGE_SIZE
        //列表
        router.get('/carlist/:page',async ctx=>{
            let err = test(page,'page')
            let data = await ctx.db.query('SELECT ID,title,price,images FROM car_table LIMIT ?,?',[(page-1) * CAR_PAGE_SIZE, CAR_PAGE_SIZE])
            //处理data
            if(data.length > 0){
                data.foreach(car=>{
                    car.image = car.images.split(',')[0]
                    delete car.images;
                })
                ctx.body = {ok:true,data}
            } else {
                throw 'no data'
            }
        })
        //获取详情
        router.get('/car/:id',async ctx=>{
            let {id} = ctx.params
            test(id,'id')
            car.features = {}
            car.features.split(',').forEach(feature=>{
                let [name,value] = feature.split('|')
                features[name] = value
            })
            car.features = features
        })
        //删除
        router.del('/car/:id',async ctx=>{
            let {id} = ctx.params;
            test(id,'id')
            let car = await ctx.db.getById('car_table',id)
            let images = car.images.split(',')

            //1.数据库删除
            //2.wenjian
            for(let i = 0;i<images.length; i++) {
                let filepath = path.resolve(path_upload,images[i])
                try{
                    await unlink(filepath);
                    catch(e){
                        let b = await exsits(filepath)
                        if(b){
                            notice(`can't delete ${filepath}`)
                        }
                    }
                }
            }
        })
        //添加
        router.post('/car',async ctx=>{
            
        })
        //修改
        router.post('/car/:id',async ctx=>{})
static
upload
utils
    genkeys.js
        const uuid = require('uuid/v4')
        const fs = require('fs')
        let arr = []
        fs.writeFileSync()

config.js
    module.exports={
        db_host:'localhost',
        db_port:'3306',
        db_user:'root',
        db_password:'',
        db_name:''
        port:8080,
        path_static:path.resolve(__dirname,'static'),
        path_upload:path.resolve(__dirname,'upload'),
        key_file:path.resolve(__dirname,'.keys'),
    }
server.js
    const {port} require('')

    server.listen(port)
    server.keys = JSON.parse( fs.readfileSync(keyfile).toString() )
    server.use(session({
        maxAge: 20*60*1000,
        httpOnly:true,
        signed:true,
        renew:true
    }),server)
    server.use(convert(body({  //convert帮助中间件升级
        uploadDir: path_upload
    })))  
    server.use(async (ctx,next)=>{
        try{

        } catch(e){
            if(typeof e == 'string'){
                ctx.body = {ok:false,err:e}
            } else {
                ctx.body = {ok:false,err:'internal server error'}
                console.error(e)
            }
        }
    })
    server.context.db = require('./libs/database')
    router.use('/api',require(./router/api))
    server.use(router.routes())
    server.use(static(path_static))


----------------------------------------
    create react app 


    let {title,price,description,images} = ctx.request.fields

    function rename(source,dest){移动操作
        fs.rename
    }

    async function moveUpload(file){//将上传的文件移动到
        file.size == 0?  //上传失败,清除文件
        else{
            let ext = path.extname(file.name)
            let base = path.basename(file.path)
            await rename(file.path,path.resolve(path_upload,base+ext))
        }
    }
    for(let i=0;i<images ; i++){
        images[i] = await moveUpload()
    }
    router.get('/carpagecount',async ctx=>{
        select count(*) as c from 
        let count = Math.ceil(rows[0].c/size)
        ctx
    })
yarn add bootstrap
components:
    Table.js
        <thead>
        <tr>
            <td>ID<td>
        </tr>
        </thead>
        <tbody>
        </tbody>
    Dialog.js
        panel
        form
        input name
        好多个图片
        btn 取消： onClick= this.props.onClose
        getForm()
App
<Table fields={[
    {name,text}
]}>
comonentdidmount(){
    加载数据
    this.setState
}
config
submit(){//添加
    let form = new FormData(form_)
    fetch('api/book'{
        method,
        body:form
    })
    fetch method:'DELETE'
}
loadData(page){

}

Page.js
Array.from(newArray(this.props.size)).map(index=>(<a href='javascript:'>))

react里面不用value,改不了，用defaultVaule
  
npm run eject

webpack.config.js
    proxy:{
        '/api':'http://localhost:8080/'
    }

    BASE为空

koa-better-body 中的对象RowDataPacket { icon: 'a33e9c163f74.jpg' }不能通过 点 取值，只能用过解构赋值取值


