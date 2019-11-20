import React from 'react'
import {Card} from 'antd'
import './book.css'

class Book extends React.Component {
    render(){
		let {author,title,intro,img_src,style} = this.props
        return (
            <div className="book" style={style} >
				<div className="imgWrapper pointer">
				<img src={img_src} />
				</div>
				<div className="book-info">
					<div className="title text-pointer">{title}</div>
					<div className="intro">{intro}</div>
					<div className="author text-pointer">{author}</div>
				</div>
			</div>
        )
    }
}

export default Book