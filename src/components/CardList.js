import React from 'react'
import Card from './Card.js'

const CardList = ({cards}) => {
  console.log("CardList")
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} profile={card} />
      ))}
    </div>
  );
}

export default CardList;
