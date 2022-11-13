import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

function Orders({}) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div>
      {user && (
        <h1 className="text-center text-3xl font-bold mt-4">Your Orders</h1>
      )}
      {!user && (
        <div className="flex flex-col items-center text-2xl font-medium mt-4">
          Sorry, Looks like you haven't made an order yet
          <img
            src="/no_order.jpg"
            alt="no order"
            className="max-w-[300px] mt-2"
          />
        </div>
      )}

      <div className=" p-6 ">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
      <Link to="/">
        <div className="text-center">
          <button className="bg-amber-500 border-2  p-1 m-auto text-center">
            Return to Home
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Orders;
