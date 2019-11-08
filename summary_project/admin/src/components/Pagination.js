import React,{Component} from 'react';
import "./Pagination.css"
class Pagination extends Component {
  constructor(...args){
    super(...args)
    this.state = {
    }
  }
  render(){
    let {count,callback,curr} = this.props.options || {}
    count = parseInt(count) || 0
    curr = parseInt(curr) || -1
    return (
        <nav>
        <ul className="pagination">
            {Array.from(new Array(count)).map((num,index) => (
                <li className={index + 1 === curr ? "page-item active" : "page-item"} key={index}>
                    <a className="page-link"
                     href="aaa"
                     onClick={async e=>{
                        await callback(index+1,e)  //同时传递事件函数和参数
                     }}
                     >{index+1}</a>
                </li>
            ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
