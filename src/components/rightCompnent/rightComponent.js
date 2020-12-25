import React, { Component } from 'react'
import "./rightComponent.css"
import Form from './Form/Form';

class RComponent extends Component {
    render() {
        return (
            <div className="RComponent">
                <div className="RComponent__body">
                    <h2>Let us get to know you better.</h2>
                    <Form />
                </div>
            </div>
        )
    }
}

export default RComponent;