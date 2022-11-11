import { CompressOutlined } from "@mui/icons-material";
import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="flex my-6">
      <img className="object-contain w-44 h-44" src={image} alt="product" />
      <div className="px-5">
        <p className="text-xl font-bold">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button
          onClick={removeFromBasket}
          className="bg-amber-500 border-2 mt-2 p-1 text-white"
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
