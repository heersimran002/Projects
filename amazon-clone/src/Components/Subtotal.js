import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useNavigate();
  const handleCheckout = (e) => {
    e.preventDefault();
    if (user) {
      history("/payment");
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!user) {
      history("/login");
    }
  };
  return (
    <div className="flex flex-col justify-between w-72 p-5 bg-white border rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {/* calculate the subtotal --> calculate the items */}
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-2" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {user && (
        <button
          onClick={handleCheckout}
          className="border-2 bg-amber-500 rounded w-full h-7 mt-2"
        >
          Proceed to checkout
        </button>
      )}

      {/* checkout cart item components */}
      {!user && (
        <div>
          <p>Please login to continue</p>
          <button
            className="bg-amber-500 border-2 mt-2 p-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Subtotal;
