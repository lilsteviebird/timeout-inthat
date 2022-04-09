import React, { useState } from 'react';

import NewCard from './components/NewCard';
import Cards from './components/Cards';

function App() {

  const [cards, setCards] = useState([]);

  const addCardHandler = (card) =>{
    setCards( (prevCards) => {
      return [card, ...prevCards]
    });
  };

  return (
    <div className="App">
      <NewCard onAddCard = { addCardHandler } />
      <Cards data = { cards }/>
    </div>
  );
}

export default App;
