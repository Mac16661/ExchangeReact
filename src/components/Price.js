import React from "react";

function Price({ color, growth, data, text }) {
  return (
    <div className={color}>
      <p className="self-end pt-2 pr-2 text-green font-semibold">
        {growth ? growth : "."}
      </p>
      <div className="self-center flex flex-col items-center px-20 py-2">
        <h1 className="text-5xl text-active font-bold">{data}</h1>
        <p className="text-m font-semibold text-active">{text}</p>
      </div>
    </div>
  );
}

export default Price;
