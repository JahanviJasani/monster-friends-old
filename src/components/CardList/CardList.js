import React from 'react'
import Card from '../Card/Card'
import './CardList.css'

const CardList = ({monsters}) => {
  return (
    <div className="text-center card-list">
      {
        monsters.map(monster=>{
          return (
            <Card
              key={monster.id}
              id={monster.id}
              name={monster.name}
              email={monster.email}
            />
          )
        })
      }
    </div>
  )
}

export default CardList