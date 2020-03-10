import React, { Component } from 'react';
import './Paging.css';
class Paging extends Component {
    state = { page: 1 };
    constructor(...args){
        super(...args);
        this.keyChange = this.keyChange.bind(this);
        this.skip = this.skip.bind(this);
    }
    handlerClick(page) {
        return () => this.props.onChange(page);
    }
    keyChange(e) {
        this.setState({ page: parseInt(e.target.value) });
    }
    skip(e) {
        if (e.keyCode === 13) {
            this.props.onChange(this.state.page);
        }
    }
    render() {
        let { cur, total } = this.props;
        let pages = Array(5).fill(0).map((item, i) => {
            let page = cur + i - 2;
            return page > 0 && page <= total ?
                <li key={i} className={page === cur ? 'active_page' : ''}>
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
                <input type='number' defaultValue={cur} id='page-skip' min='0' max={`${total}`} onChange={this.keyChange} onKeyDown={this.skip} />
                <div style={{ float: 'none', clear: 'both' }}></div>
            </div>)
    }
}
export default Paging;