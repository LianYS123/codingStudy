import React from 'react';
import Article from './Article';
import Paging from './Paging';
import Header from './Header';
import qs from 'querystring';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
class App extends React.Component {
  page_size = 10;
  lastUrl = '';
  constructor(...args) {
    super(...args);
    let orders = {
      time: '按时间排序',
      rating_score: '按评分排序',
      rating_score: '按热度排序',
      common: '综合排序'
    };
    this.state = { data: null, orders };
    // this.pageChange = this.pageChange.bind(this);
    // this.cateChange = this.cateChange.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  async loadData({ page, cate } = {}) {
    page = page || this.props.match.params.page || 1;
    page = parseInt(page);
    cate = cate || this.props.match.params.cate || 'common';
    console.log(page, cate);
    let page_size = this.page_size;
    let opt = { page_size, page, order: cate };
    let url = `http://localhost:8080/api?${qs.stringify(opt)}`;
    if (url === this.lastUrl) { return };
    let res = await (await fetch(url)).json();
    this.setState({ data: res.data, total: res.total });
    this.props.history.push(`/${cate}/${page}`);
    this.lastUrl = url;
  }
  render() {
    let { data, cate } = this.state;
    let cur = this.props.match.params.page;
    cur = cur ? parseInt(cur) : 1;
    return (
      <section id="page" className="hfeed">
        <Header orders={this.state.orders} curCate={cate} cb={cate => { this.loadData({ cate }) }}></Header>
        <div id="primary">
          {
            this.state.data ?
              <div id="content">
                {data.rows.map(item => <Article item={item} key={item.id}></Article>)}
                <Paging cur={cur} total={data.total} onChange={page => { this.loadData({ page }) }}></Paging>
              </div>
              : ''
          }
        </div>
      </section>
    );
  }
}

export default withRouter(App);
