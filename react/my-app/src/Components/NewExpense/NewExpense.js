import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  //define the function

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //will trigger when user saves the entered expense data --- (onSaveExpenseData) q k hum onsubmit per call kar rhe h isko

  // basically form is child
  //We can create our own event props,
  // function ko value jaise lege
  // function k andar parameter pass karege from the child
  // props k andar  onSaveExpenseDataHandler jiskko hum submit m call karege using     props.onSaveExpenseData(expenseData);
  // and yeh argument joh pass kia woh child se parent m aagya

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
