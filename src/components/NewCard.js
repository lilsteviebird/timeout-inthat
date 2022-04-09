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

    return(
        // <Popup trigger={<button> Add a New Card!</button>} modal nested>
        //     <div>
        //         <TimerForm onSaveCard = { saveCardDataHandler }/>
        //         <button
        //     className="button"
        //     onClick={() => {
        //       console.log('modal closed ');
        //       close();
        //     }}
        //   >
        //     I'm done!
        //   </button>
        //     </div>
        // </Popup>

        <Popup
        trigger={<button className="button"> Add an Alarm! </button>}
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
              <TimerForm />
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