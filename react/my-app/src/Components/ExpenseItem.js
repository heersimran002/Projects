import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 12, 21);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
