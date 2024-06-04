import React from 'react';
import NavBar from '../components/NavBar';
import { MultiActionAreaCard } from '../components/Projects';
import 'css-doodle';
import '../CSS/Homepage.css';

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
    <div className="home-page-container">
      <css-doodle use="var(--rules)" className="css-doodle-bg" />
      <NavBar />
      <div className="intro-container">
        <div className="intro-text">
          <h1>HEY, I AM CHAKER BALOCH</h1>
          <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
      </div>
      <div className="content-container">
        <div className='cards-container'>
          {cardRows.map((row, rowIndex) => (
            <div key={rowIndex} className='card-row'>
              {row.map((card, cardIndex) => (
                <div key={cardIndex} className='card'>
                  {card}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
