import React, { Component } from 'react'
import "./Card.css"

import LeftComponent from '../components/leftComponent/leftComponent';
import RightCompnent from '../components/rightCompnent/rightComponent';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <LeftComponent />
                <RightCompnent />
            </div>
        )
    }
}

export default Card;