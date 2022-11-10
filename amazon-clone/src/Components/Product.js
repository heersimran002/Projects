import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="flex flex-col items-center justify-center m-2 h-96 min-w-[100px] w-full bg-slate-100 z-1 p-8">
      <div className="max-h-24 mb-5 ">
        <p>{title}</p>
        <p className="mt-2">
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
      </div>
      <img
        className="max-h-48 w-full object-contain mb-5"
        src={image}
        alt="products"
      />
      <button
        onClick={addToBasket}
        className="bg-amber-500 border-2 mt-2 p-1 text-white"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
