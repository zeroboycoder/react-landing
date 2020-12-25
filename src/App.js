import React, { Component } from 'react'

import { Layout } from './hoc/Layout/Layout';
import Card from './container/Card'

class App extends Component {
    render() {
        return (
            <Layout>
                <Card />
            </Layout>
        )
    }
}

export default App;