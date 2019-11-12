import datalib from '../libs/datalibs';
export default async function(page,size=10){
    console.log(`load data on page ${page}`);
    try{
        let data =  await datalib.get(`api/booklist/${page}/${size}`)
        return data
    }
    catch(err) {
      alert('数据加载出错')
      console.error(err)
    }
    return null
}