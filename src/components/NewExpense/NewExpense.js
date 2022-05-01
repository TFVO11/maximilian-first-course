import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
//여기서 매개변수가 왜 홀로 변수 안에 열거 되어있는가? 바로 매개변수는 함수 밖에서
//받아오는 값인데 이 값이 enteredtitle같은 것이다. 참고로 인자는 밖에서 매개변수로
//주는 값이다.

//여기서 ExpenseForm에 있는 expanseData가 인자로써 onSaveExpesneData에 전달
//이 되고 거기서 하위 폴더에서 상위 폴더로 역으로 값이 넘어온다.
return <div className = "new-expenses">
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
</div>

};

export default NewExpense;