import React from 'react';
export default function (props) {
  let {item,tagChange} = props;
  let date = new Date(item.time);
  let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  return (
    <div>
      {item
        ? <article
            id="post-76482"
            className="post-76482 post type-post status-publish format-standard hentry category-anime tag-bomb-cute-bomb tag-1300 tag-761 tag-1373 tag-72 tag-49 tag-2306 tag-2387">
            <header className="entry-header">
              <h1 className="entry-title">
                <a href={item.href} rel="bookmark">{item.title}</a>
              </h1>
              <div className="entry-meta">
                <span className="sep">发表于</span>
                <a href={item.href} title="下午9:35" rel="bookmark">
                  <time className="entry-date">{time}</time>
                </a>
                <span className="by-author">
                  <span className="sep">由</span>
                  <span className="author vcard">
                    <a
                      className="url fn n"
                      href="https://www.liuli.se/wp/author/acg-gy"
                      title="查看所有由多啦H萌发布的文章"
                      rel="author">多啦H萌</a>
                  </span>
                </span>
              </div>
              <div className="comments-link">
                <a href="https://www.liuli.se/wp/76482.html#comments">20</a>
              </div>
            </header>
            <div className="entry-content">
              <p>
                <a href={item.href}><img src={item.img_src}/></a><br/> {item.content}
                <br/>
                评分：{item.rating_score}
                <br/>
                评分人数：{item.rating_count}
                <br/>
                uid:<br/> {item.uid && item
                  .uid
                  .split('|')
                  .map(u => <span key={u}>{`magnet:?xt=urn:btih:${u}`}<br/></span>)}
              </p>
            </div>
            <footer className="entry-meta">
              <span className="cat-links">
                <span className="entry-utility-prep entry-utility-prep-cat-links">发表在</span>
                <a href="https://www.liuli.se/wp/anime.html" rel="category tag">动画</a>
              </span>
              <span className="sep">
                |
              </span>
              <span className="tag-links">
                <span className="entry-utility-prep entry-utility-prep-tag-links">标签为</span>
                {item.tags && item
                  .tags
                  .split('|')
                  .map((tag, i) => <a key={i} onClick={e => {
                    e.preventDefault();
                    tagChange(tag);
                  }} href="#" rel="tag">{tag},</a>)}
              </span>
              <span className="sep">
                |
              </span>
              <span className="comments-link">
                <a href="https://www.liuli.se/wp/76482.html#comments">
                  <b>20</b>条回复</a>
              </span>
            </footer>
          </article>
        : ''}
    </div>
  );
}