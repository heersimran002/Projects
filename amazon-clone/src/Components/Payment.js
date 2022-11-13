import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from "../firebase";

import axios from "./axios";

function Payment() {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setProcessing(false);
        setError(null);
        setSucceeded(true);
        dispatch({
          type: "EMPTY_BASKET",
        });

        history("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);

    setError(event.error ? event.error.message : "");
  };
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
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="">
              <CurrencyFormat
                renderText={(value) => (
                  <h3 className="text-xl font-medium">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                className="bg-amber-500 border-2 mt-2 p-1 text-white"
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>

            {/* Errors */}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
