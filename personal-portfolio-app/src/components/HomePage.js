
import React from 'react';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Hidden from '@mui/material/Hidden';


import { MultiActionAreaCard } from '../components/Projects';


const HomePage = () => {
  const cardCount = 6; // Number of cards you want
  const cards = Array.from({ length: cardCount }).map((_, index) => (
    <MultiActionAreaCard key={index} />
  ));

  const maxCardsPerRow = 3; // Maximum number of cards per row

  const cardRows = [];
  for (let i = 0; i < cards.length; i += maxCardsPerRow) {
    const row = cards.slice(i, i + maxCardsPerRow);
    cardRows.push(row);
  }

  return (
    <div>
      <NavBar />
      <div className='cards-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin:'0.1rem'}}>
  {cardRows.map((row, rowIndex) => (
    <div key={rowIndex} className='card-row' style={{ display: 'flex', flexDirection: 'row' }}>
      {row.map((card, cardIndex) => (
        <div key={cardIndex} className='card' style={{ margin: '1rem'}}>
          {card}
        </div>
      ))}
    </div>
  ))}
</div>







    </div>
  );
}

export default HomePage;
