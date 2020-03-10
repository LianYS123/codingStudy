import React from 'react';
import Article from './Article';
import Paging from './Paging';
import Header from './Header';
import qs from 'querystring';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
class App extends React.Component {
  page_size = 10;
  lastUrl = '';
  constructor(...args) {
    super(...args);
    let orders = {
      time: '按时间排序',
      rating_score: '按评分排序',
      rating_count: '按热度排序',
      common: '综合排序'
    };
    this.state = { data: null, orders };
  }
  componentDidMount() {
    this.loadData();
  }
  getOpt({page,order,tags,keyword,clear}={}){
    let lastQuery = qs.parse(this.props.location.search.substring(1));
    if(!clear){
      order = order || lastQuery.order || 'common';
      page = page || lastQuery.page || 1;
      tags = tags || lastQuery.tags;
      keyword = keyword || lastQuery.keyword;
    } else {
      page = page || 1;
      order = order || 'common';
    }
    let page_size = this.page_size;
    let opt = { page_size, page, order, tags,keyword };
    return opt;
  }
  async loadData(params) {
    let query = qs.stringify(this.getOpt(params));
    let url = `http://localhost:8080/api?${query}`;
    if (url === this.lastUrl) { return };
    let res = await (await fetch(url)).json();
    this.setState({ data: res.data, total: res.total });
    this.props.history.push(`/?${query}`);
    this.lastUrl = url;
  }
  render() {
    let { data } = this.state;
    let {order,page,tags} = this.getOpt();
    let cur = parseInt(page);
    return (
      <section id="page" className="hfeed">
        <Header orders={this.state.orders} curCate={order} search={keyword=>{this.loadData({keyword,clear:true})}} cb={order => { this.loadData({ order,clear:true }) }}></Header>
        <div id="primary">
          {
            this.state.data ?
              <div id="content">
                {data.rows.map(item => <Article item={item} tagChange={tags => this.loadData({tags,clear:true})} key={item.id}></Article>)}
                <Paging cur={cur} total={data.total} onChange={page => { this.loadData({ page }) }}></Paging>
              </div>
              : ''
          }
        </div>
        <Footer></Footer>
      </section>
    );
  }
}

export default withRouter(App);
