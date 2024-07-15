"use client";
import React from "react";
import { BiDollar } from "react-icons/bi";

const ProdWithPrice = ({ img, title, price }) => {
  const single_title = title.split(",")[0];
  let min = 10;
  let max = 60;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="w-96 h-custom-length530 relative mt-6">
      <div className="w-92 bg-bg-color-for-prod h-custom-length440 flex justify-center items-center">
        <img src={img} className="w-72 h-72 object-cover mix-blend-darken" />
        <h3 className="absolute top-0 right-0 bg-red-600 px-6 py-2 text-gray-50">
          {randomNumber}% OFF
        </h3>
      </div>
      <h4 className="text-center mt-4 font-bold text-lg h-14 overflow-hidden">
        {single_title}
      </h4>
      <p className="text-center">
        <span className="line-through">
          ${(parseFloat(price.slice(1)) + 30).toFixed(2)}
        </span>{" "}
        &nbsp;&nbsp;
        {price}
      </p>
    </div>
  );
};

export default ProdWithPrice;
