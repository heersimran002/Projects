import React from "react";

function Card(props) {
  return (
    <div className="bg-white shadow-lg shadow-black rounded-xl grid gap-3 justify-items-center h-500 items-center min-h-full">
      {props.children}
    </div>
  );
}

export default Card;
