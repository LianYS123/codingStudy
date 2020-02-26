const db = require('../libs/database');
const {PATH_STATIC} = require('../config');
const uuid = require('uuid/v4');
const {notice,fetchFile} = require('./tools');
const imgPath = PATH_STATIC + '/imgs/';

(async () => {
    let rows = await db.select('video_info',['cover','media_id'],'img_name is null');
    for(let {cover,media_id} of rows){
        let img_name = (uuid() + cover.substring(cover.lastIndexOf('.'))).replace(/\-/g,'');
        let path = imgPath + img_name;
        console.log(path,cover,media_id)
        fetchFile(cover,path);
        await db.update('video_info',{img_name},`media_id=${media_id}`);
    }
})();