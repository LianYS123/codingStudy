import React from 'react'
import './card.css'

class Card extends React.Component {
    render(){
        let {info1,info2} = this.props
        return (
            <div className="movie">
				<div className="movieImage">
					<img src="#"/>
				</div>
				
				<div className="movieInfo">
					<ul>
						<li>{info1}</li>
						<li>{info2}</li>
					</ul>
				</div>
				
			</div>
        )
    }
}

export default Card