import React, { useState, useEffect } from 'react';

import NewCard from './components/NewCard';
import Cards from './components/Cards';

import axios from 'axios';


function App() {

  let card_data = [];

  const [cards, setCards] = useState(card_data);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get(`https://eeunxk9lxi.execute-api.us-east-1.amazonaws.com/default`)
      .then(res => {
        console.log(res.data.body);
        setCards(res.data.body);
      })
  }, [value]);

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
