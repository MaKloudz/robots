import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor() {
        super()
        this.state = {
            hasErrors: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasErrors: true })
    }

    render() {
        if (this.state.hasErrors) {
            return <h1>OOOOOPS,thats bad</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry
