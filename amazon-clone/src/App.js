import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Login routes  */}
          <Route path="/login" element={<Login />} />

          {/* Payement routes */}
          <Route path="/payment" element={[<Header />, <Payment />]} />
          {/* checkout routes */}
          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>

          {/* home routes */}
          <Route exact path="/" element={[<Header />, <Home />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
