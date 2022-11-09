import React from "react";

function User() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addUserHandler}>
        <p>
          <label htmlFor="name">Please enter a User Name:</label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" />
        </p>
        <p>
          <button type="submit">Add User</button>
        </p>
      </form>
    </div>
  );
}

export default User;
