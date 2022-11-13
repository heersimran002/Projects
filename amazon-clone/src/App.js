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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51M3BiKB3zG9bNnfS02MugCX3RbzEzEmrmtYpBboY3eLZHXC5ZBC5B1SoIgSRGcIjIhq5RwZswQ4sNoTA572uWiPD00bmyKfQ8g"
);

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
          <Route path="/orders" element={[<Header />, <Orders />]} />

          {/* Payement routes */}
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          {/* checkout routes */}
          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>

          {/* home routes */}
          <Route path="/" element={[<Header />, <Home />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
