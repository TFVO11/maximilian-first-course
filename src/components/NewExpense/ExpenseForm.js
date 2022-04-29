import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

import './ExpenseForm.css';


const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(' ');
    const [enterAmount, setEnteredAmount]= useState(' ');
    const [enterDate, setEnteredDate]= useState(' ');
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
       // setUserInput({
        //    ...userInput,
        //    enterTitle: event.target.value
        //});

        //나중에 이전 state가 현재 state에 영향을 주는 것이라면 밑에 방식으로 하라
        // setUserInput((prevState) => {
        //     return ({
        //         ...prevState, enteredTitle: event.target.value

        //     })
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enterAmount: event.target.value
    //     });
    };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.terget.input);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // });
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;