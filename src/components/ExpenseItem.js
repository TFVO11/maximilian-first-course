
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js'

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />
            <div className='expense-item__descriptio'>
                <h1>{props.title}</h1>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

        </Card>

    );
}

export default ExpenseItem;