import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function User(props) {
  const [nameEntered, setEnteredName] = useState("");
  const [ageEntered, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (nameEntered.trim().length === 0 || ageEntered.trim().length === 0) {
      setError({
        message: "Please enter your name and age.",
        title: "Please enter your name",
      });
      return;
    }
    if (ageEntered < 1) {
      setError({
        message: "Please enter a valid age.",
        title: "Invalid age",
      });
      return;
    }
    props.onAddUser(nameEntered, ageEntered);
    setEnteredAge("");
    setEnteredName("");
  };

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card>
        <div className="bg-slate-300 p-8 flex flex-col ">
          <form onSubmit={addUserHandler} className="p-8">
            <p>
              <label htmlFor="name" className="text-3xl block">
                User Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={nameEntered}
                onChange={nameChangedHandler}
              />
            </p>
            <p>
              <label htmlFor="age" className="text-3xl block">
                Age:
              </label>
              <input
                type="number"
                name="age"
                id="age"
                className="block"
                value={ageEntered}
                onChange={ageChangedHandler}
              />
            </p>
            <p className="py-4 ">
              <Button type="submit">Add User</Button>
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default User;
