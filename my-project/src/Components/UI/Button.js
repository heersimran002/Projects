import React from "react";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className="p-4 rounded bg-slate-500 self-center"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
