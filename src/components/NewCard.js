import React from 'react';

import Popup from 'reactjs-popup';
import TimerForm from './TimerForm';

import 'reactjs-popup/dist/index.css';


const NewCard = (props) =>{
    return(
        <Popup trigger={<button> Add a New Card!</button>} modal nested>
            <div>
                <TimerForm />
            </div>
        </Popup>
    );
}

export default NewCard;