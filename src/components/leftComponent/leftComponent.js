import React, { Component } from 'react'
import "./leftComponent.css"

class LComponent extends Component {
    render() {
        return (
            <div className="LComponent">
                <div className="LComponent__body">
                    <h1 className="title">Get In Touch</h1>
                    <p>What to see how Zengrowth can help you and your team? We'll listen to your story and propose a data-driven growth plen with channels that fit across your customer journey.</p>
                    <div className="LComponent__body__list">
                        <p>Predictable Lead Generation</p>
                        <p>Rapid Marketing Experimentation</p>
                        <p>Lower Customer Acquisition Costs</p>
                        <p>Increased Marketing ROI</p>
                    </div>
                    <hr />
                    <h3>Trusted growth partner for hyper-growth companes:</h3>
                </div>
            </div>
        )
    }
}

export default LComponent;