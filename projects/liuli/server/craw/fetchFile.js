const xFetch = require("./xFetch");
const fs = require("fs");
const writeFile = (ws, filename) => {
    return new Promise((resolve, reject) => {
        ws.pipe(fs.createWriteStream(filename))
        ws.on('finish', resolve);
        ws.on('error', reject);
    })
}
const fetchFile = async (link, filename) => {
    filename = (filename || '') + link.substr(link.lastIndexOf('/') + 1);
    console.log(`fetch file from ${link} to ${filename}`)
    const s = (await xFetch(link).then(res => res.blob())).stream();
    await writeFile(s, filename)
    return filename;
};
module.exports = fetchFile;
fetchFile('https://awscc3001.r18.com/litevideo/freepv/y/ymd/ymdd00197/ymdd00197_dmb_w.mp4', './videos/')
// fetchFile('https://pics.r18.com/digital/video/ymdd00197/ymdd00197ps.jpg', 'imgs/"特價[獨家]旋律,*標記,日本熱情好客的第四部分去與旋律!貝洛丘溫泉約會"').catch(console.error)
// fetchFile('https://pics.r18.com/digital/video/ymdd00197/ymdd00197ps.jpg')"