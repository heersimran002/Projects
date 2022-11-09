import "./App.css";

import React, { useState } from "react";

import User from "./Components/Users/User";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App flex  bg-slate-900 h-screen items-center justify-center">
      <User onAddUser={onAddUserHandler} />
      <UserList users={usersList}>Hellooo</UserList>
    </div>
  );
}

export default App;
