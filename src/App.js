import React, { Component } from 'react'
import './App.css';
import SearchBox from './SearchBox'
import CardList from './CardList'
import { monsters } from './monsters'

const App = () => {
  return (
    <div className="tc">
      <h1 className="code">Monster Friends</h1>
      <SearchBox />
      <CardList monsters={monsters}/>
    </div>
  )
}

export default App;
