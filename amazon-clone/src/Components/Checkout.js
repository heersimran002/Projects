import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="flex p-5 bg-white h-max">
      <div>
        <img
          className="w-full mb-3"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="mr-2 p-2 text-2xl font-bold border-b">
          Your shopping cart
        </div>

        {/* checkout cart item components */}

        {basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            rating={item.rating}
            price={item.price}
            image={item.image}
          ></CheckoutProduct>
        ))}
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
