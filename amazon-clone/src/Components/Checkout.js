import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="flex p-5 bg-white h-max">
      <div>
        <img
          className="w-full mb-3"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="mr-2 p-2 text-2xl font-bold border-b">
          <h2>Your Shopping Basket</h2>
        </div>
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
