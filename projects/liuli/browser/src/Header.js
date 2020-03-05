import React from 'react';
export default class Header extends React.Component {
    // constructor() {
    //     let { orders, curCate, cb } = this.props;
    // }
    render() {
        let { orders, curCate, cb } = this.props;
        return (
            <header id="branding" role="banner">
                <hgroup>
                    <h1 id="site-title">
                        <span>
                            <a href="https://www.liuli.se/wp/" rel="home">琉璃神社 ★ HACG.me</a>
                        </span>
                    </h1>
                    <h2 id="site-description">最新的ACG资讯 分享同人动漫的快乐</h2>
                </hgroup>
                <a href="https://www.liuli.se/wp/">
                    <img
                        src="https://www.liuli.se/wp/wp-content/uploads/2019/02/2019.jpg"
                        width={1250}
                        height={360}
                        alt="琉璃神社 ★ HACG.me" />
                </a>
                <form method="get" id="searchform" action="https://www.liuli.se/wp/">
                    <label htmlFor="s" className="assistive-text">搜索</label>
                    <input type="text" className="field" name="s" id="s" placeholder="搜索" />
                    <input
                        type="submit"
                        className="submit"
                        name="submit"
                        id="searchsubmit"
                        defaultValue="搜索" />
                </form>
                <nav id="access" role="navigation">
                    <h3 className="assistive-text">主页</h3>
                    <div className="skip-link">
                        <a className="assistive-text" href="#content">跳至主内容区域</a>
                    </div>
                    <div className="skip-link">
                        <a className="assistive-text" href="#secondary">跳至副内容区域</a>
                    </div>
                    <div className="menu-%e8%8f%9c%e5%8d%95ssl-container">
                        <ul id="menu-%e8%8f%9c%e5%8d%95ssl" className="menu">
                            {Object.keys(orders).map(cate =>
                                <li
                                    onClick={() => { cb(cate) }}
                                    key={cate}
                                    className={`menu-item menu-item-type-taxonomy menu-item-object-category ${cate === curCate ? 'current-menu-item' : ''}`}>
                                    <a href="#" onClick={e => e.preventDefault()}>{orders[cate]}</a>
                                </li>)}
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}