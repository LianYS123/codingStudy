const { notice } = require("./tools");
const xFetch = require("./xFetch");
const createPool = require("./createPool");
const { load } = require("cheerio");
const _fetchFile = require('./fetchFile');
const fetch = createPool(link => xFetch(link).then(res => res.text()).then(load));
const fetchFile = createPool(_fetchFile, 20);
const createLinks = (num) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(
      `https://www.r18.com/common/search/floor=movies/service=video/page=${i}/?lg=zh`
    );
  }
  return res;
};
const links = createLinks(1667);
const parse = ($) => {
  const els = $(
    "#contents > div.main > section > ul.cmn-list-product01.type01.clearfix.pt20.cmn-sec-imgHover01 > li"
  ).each(function () {
      const src1 = $(this).find('div > p > a').attr('data-video-high')
      const src2 = $(this).find('div > p > a').attr('data-video-med')
      const src3 = $(this).find('div > p > a').attr('data-video-low')
      let title = $(this).find('a > dl > dt').text();
      title = title ? title.replace(/\s+/g, '') : '没标题' ;
      const imgSrc = $(this).find('a > p > img').attr('data-original');
      let src =  src1 || src2 || src3;
    //   fetchFile(src, `./videos/${title}_`).then(console.log).catch(err => notice('./crawler_err.log', err.message));
      fetchFile(imgSrc, `./imgs/${title}_`).then(console.log).catch(err => notice('./crawler_err.log', err.message));

    //   notice('./r.txt', JSON.stringify({title, src, imgSrc}));
  });
};
links.forEach((link) => fetch(link).then(parse).catch(err => notice('./crawler_err.log', err.message)));
