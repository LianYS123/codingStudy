import React, { Component } from 'react';
class Paging extends Component {
    handlerClick(page){
        return () => this.props.onChange(page);
    }
    render() {
        let { cur, total } = this.props;
        let pages = Array(5).fill(0).map((item, i) => {
            let page = cur + i - 2;
            return page > 0 && page <= total ? 
                <li key={i}  className={page === cur ? 'active_page' : ''}>
                    <a href="#" onClick={this.handlerClick(page)}>{page}</a>
                </li> : '';
        })
        return (
        <div id="wp_page_numbers">
            <ul>
                <li className="page_info">Page {cur} of {total}</li>
                {cur >= 4 ? <li className="first_last_page"><a href="#" onClick={this.handlerClick(1)}>1</a></li> : ''}
                {cur > 4 ? <li className="space">...</li> : ''}
                {pages}
                {cur < total - 3 ? <li className="space">...</li> : ''}
                {cur < total - 2 ? <li className="first_last_page"><a href="#" onClick={this.handlerClick(total)}>{total}</a></li> : ''}
            </ul>
            <div style={{float: 'none', clear: 'both'}}></div>
        </div>)
    }
}
export default Paging;