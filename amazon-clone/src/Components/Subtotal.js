import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="flex flex-col justify-between w-72 p-5 bg-white border rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {/* calculate the subtotal --> calculate the items */}
            <p>
              Subtotal ({0} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-2" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="border-2 bg-amber-500 rounded w-full h-7 mt-2 ">
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
