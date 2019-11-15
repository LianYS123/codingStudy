const {cra} = require('./utils')
module.exports = class Detail {
    constructor($){
        this.$ = $
    }
    async spider(){
        return this.$
    }
    async parser(){
        let $ = await this.spider()
        return $('#info .txt_cont #content1').text()
    }
    async processor(){
        return await this.parser()
    }
} 