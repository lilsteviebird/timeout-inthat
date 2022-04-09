import React, { useState, useEffect } from 'react';
import './TimerForm.css';

import axios from 'axios';

const TimerForm = (props) => {

    const [enteredName, setName] = useState('');
    const [enteredDays, setDays] = useState('');
    const [enteredHours, setHours] = useState('');

    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    }

    const dayChangeHandler = (event) =>{
        setDays(event.target.value);
    }

    const hourChangeHandler = (event) =>{
        setHours(event.target.value);
    }
    // const submitHandler = (event) =>{
    //     event.preventDefault();

    //     const expenseData = {
    //         title: enteredTitle,
    //         amount: enteredAmount,
    //         date: new Date(enteredDate)
    //     }
    //     props.onSaveExpenseData(expenseData);

    //     setEnteredTitle("");
    //     setEnteredDate("");
    //     setEnteredAmount("");
    // }

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log("submitted!")
        console.log("Name: " + enteredName);
        console.log("Days: " + enteredDays);
        console.log("Hours: " + enteredHours);

        let PersonNumber_Random = Math.random.toString();

        const expenseData = {
            PersonNumber: PersonNumber_Random,
                    Name: enteredName,
                    Days: enteredDays,
                    Hours: enteredHours
        }
        props.onSaveCard(expenseData);
        
        axios.post(
                  'https://milrfcgyte.execute-api.us-east-1.amazonaws.com/default',
                  { PersonNumber: Math.random().toString(),
                    Name: enteredName,
                    Days: enteredDays,
                    Hours: enteredHours}
                );

        setName("");
        setDays("");
        setHours("");
    }


    return(
        <form onSubmit = { submitHandler }>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Name</label>
                <input type = 'text' value = { enteredName } onChange = { nameChangeHandler }/>
            </div>
            <div className = "new-expense__control">
                <label>Days</label>
                <input type = 'number' min = "0" step = "1" value = { enteredDays } onChange = { dayChangeHandler }/>
            </div>
            <div className = "new-expense__control">
                <label>Hours</label>
                <input type = 'number' min = "1" step = "1" value = { enteredHours } onChange = { hourChangeHandler }/>
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "submit" > Add Card </button>
        </div>
    </form>
    );
       
}

export default TimerForm;