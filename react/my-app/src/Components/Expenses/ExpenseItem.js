// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  //must be called inside a function
  //not to be called inside nested functions
  //needs default state
  //reutrns  or give access to it
  // returns a function that can be used to assign value to it and that can be user
  // array is returned  first value is current state variable itself and updating function
  //using destructing
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   //will not work
  //   // title = "Updated";
  //   setTitle("Updated");
  // };
  // const expenseDate = new Date(2022, 12, 21);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
