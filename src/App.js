import React, { Component } from 'react'
import './App.css';
import SearchBox from './SearchBox'
import CardList from './CardList'
import { monsters } from './monsters'

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: monsters,
      searchString: ''
    }
  }

  filterMonsters = (event) => {
    this.setState({searchString: event.target.value})
  }

  render() {

    const filteredMonsters = this.state.monsters.filter (monster => {
      return monster.name.toLowerCase().includes(this.state.searchString.toLowerCase())
    })

    console.log()

    return (
      <div className="tc">
        <h1 className="code">Monster Friends</h1>
        <SearchBox onSearch={this.filterMonsters} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
