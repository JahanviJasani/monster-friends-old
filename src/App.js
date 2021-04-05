import React, { Component } from 'react'
import './App.css';
import SearchBox from './SearchBox'
import CardList from './CardList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  filterMonsters = (event) => {
    this.setState({searchString: event.target.value})
  }

  render() {

    const filteredMonsters = this.state.monsters.filter (monster => {
      return monster.name.toLowerCase().includes(this.state.searchString.toLowerCase())
    })

    if(this.state.monsters.length === 0) {
      return (
        <div className="text-center wrapper">
          <h1>Loading</h1>
        </div>
      )
    }
    else if (filteredMonsters.length === 0) {
      return (
        <div className="text-center wrapper">
          <h1>Monster Friends</h1>
          <SearchBox onSearch={this.filterMonsters} />
          <p>No monster named {this.state.searchString} found!</p>
        </div>
      )
    } 
    else {
      return (
        <div className="text-center wrapper">
          <h1>Monster Friends</h1>
          <SearchBox onSearch={this.filterMonsters} />
          <CardList monsters={filteredMonsters} />
        </div>
      )
    }
  }
}

export default App;
