
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import { useState } from 'react';

const ExpenseItem = (props) => {
    
    //function clickHandler() {}
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />
            <div className='expense-item__descriptio'>
                <h1>{title}</h1>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
//button onClick={clickHandler}는 클릭핸들러라는 함수를 
//실행한다는 것이다. 
    );
}

export default ExpenseItem;