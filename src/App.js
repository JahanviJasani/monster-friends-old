import React, { Component } from 'react'
import './App.css';
import CardList from './CardList'
import { monsters } from './monsters'

const App = () => {
  return (
    <div className="tc">
      <CardList monsters={monsters}/>
    </div>
  )
}

export default App;
