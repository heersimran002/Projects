import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="bg-white">
      <h1 className="text-center p-2 text-3xl border-b">
        <Link to="/checkout"> Checkout({basket?.length} items)</Link>
      </h1>

      <div className="flex p-5 my-0 mx-5 border-b gap-x-4">
        <div>
          <h2 className="text-2xl font-medium basis-1/4">Delivery Address</h2>
        </div>
        <div className="basis-3/4">
          <p>{user.email}</p>
          <p>Fake Address</p>
          <p>Fake Address line 2</p>
        </div>
      </div>
      <div className="flex p-5 my-0 mx-5 border-b flex-col">
        <p className="text-2xl font-medium">Review Items and delivery</p>
        <div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="flex p-5 my-0 mx-5 border-b">
        <div className="text-2xl font-medium basis-1/4">Payment Method</div>
        <div className="basis-3/4">
          <form onSubmit="" />
        </div>
      </div>
    </div>
  );
}

export default Payment;
