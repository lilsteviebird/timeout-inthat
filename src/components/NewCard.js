import React from 'react';

import Popup from 'reactjs-popup';
import TimerForm from './TimerForm';

import 'reactjs-popup/dist/index.css';
import './NewCard.css'


const NewCard = (props) =>{

    const saveCardDataHandler = (enteredData) =>{
        const card = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddCard(card);
        console.log(card);
    }

    const handleDoubleClick = () =>{
        console.log("double clicked!");
        return(
            <Popup>
                <h3>Hello</h3>
            </Popup>
        );
    }

    return(
        <Popup
        trigger={<button className="button" onDoubleClick = { handleDoubleClick }> Add an Inthat Timeout! </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Submit Your Alarm! </div>
            <div className="content">
              {' '}
              <TimerForm onSaveCard = { saveCardDataHandler }/>
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                No More People to Add!
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
}

export default NewCard;