import React from "react";

function Button(props) {
  return (
    <button className="bg-green text-white font-sans py-1 px-6 rounded md:ml hover:bg-indigo-400 duration-500">
      {props.children}
    </button>
  );
}

export default Button;
