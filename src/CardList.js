import React from 'react';
import Card from './Card1';
import './cardlist1.css';

  const CardList = ({ cards50 }) => (
    <div className='card_list'>
      {cards50.map((card51, index) => (
        <Card key={index} card12={card51}  />
      ))}
    </div>
  );


export default CardList;