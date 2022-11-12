import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Login routes  */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
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
