import React from 'react';

import Popup from 'reactjs-popup';
import TimerForm from './TimerForm';

import 'reactjs-popup/dist/index.css';


const NewCard = (props) =>{

    const saveCardDataHandler = (enteredData) =>{
        const card = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddCard(card);
        console.log(card);
    }

    return(
        <Popup trigger={<button> Add a New Card!</button>} modal nested>
            <div>
                <TimerForm onSaveCard = { saveCardDataHandler }/>
            </div>
        </Popup>
    );
}

export default NewCard;