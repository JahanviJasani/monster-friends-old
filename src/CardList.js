import React from 'react'
import Card from './Card'

const CardList = ({monsters}) => {
  return (
    <div className="text-center">
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