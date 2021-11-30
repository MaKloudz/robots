import React, { Component } from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SeachBox'
import ErrorBoundry from './ErrorBoundry'
import './App.css'


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch(' https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }


    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc' >
                    <h1 className='f1'>robofriends</h1>
                    <ErrorBoundry>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </ErrorBoundry>
                </div>
            )
        }

    }
}

export default App
