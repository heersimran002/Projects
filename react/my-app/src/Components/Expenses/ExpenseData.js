import ExpenseItem from "./ExpenseItem";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from "react";

function ExpenseData(props) {
  const [selectedYear, SetSelectedYear] = useState("2020");
  const onSelectYearDataHandler = (selectYear) => {
    SetSelectedYear(selectYear);
  };
  console.log(props);
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  //      this is to render a list of data dynamicaaly
  //    so we used map methd and for every item we display the data using the expense array we recieve using the map

  let expenseContent = <p>No expense found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectYear={onSelectYearDataHandler}
        />

        {expenseContent}
      </Card>
    </div>
  );
}

export default ExpenseData;
