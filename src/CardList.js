import React from 'react'
import Card from './Card'

const CardList = ({monsters}) => {
  return (
    <div className="tc">
      {
        monsters.map(monster=>{
          return (
            <Card
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