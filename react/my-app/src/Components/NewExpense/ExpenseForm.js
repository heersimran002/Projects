import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //same can be done as

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // the event object has a field from which we can get the value we are inputting into the form field
  // like javascript event object is what we get from the function

  const titleChangeHandler = (event) => {
    // to store  the value in the state
    setEnteredTitle(event.target.value);
    // setUserInput({
    // since we are using object of use state
    // we need to keep the value of other two state as same .. so we use the spread operator to keep the value intact
    // and override the current state of this handler to the new value
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          min="1995-01-01"
          max="2023-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
