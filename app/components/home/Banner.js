import React from "react";
import style from "../../styles/home.module.css";

const Banner = () => {
  return (
    <div
      className={`w-custom-length1360 h-custom-length628 flex mx-auto justify-between items-center bg-bg-color-for-banner w-full px-20`}
    >
      <div className={`w-custom-length623 h-custom-length390 flex flex-col`}>
        <h1
          className={`font-bold ${style.ban_head} font-font-pop text-5xl leading-normal`}
        >
          PROVIDING SERVICES AT YOUR DOOR
        </h1>
        <p>
          <span
            className="font-bold text-xl"
            style={{ color: "#707070", fontFamily: "Montserrat" }}
          >
            MACC Essentials
          </span>{" "}
          has an important role in making supplies and services available to
          customers and their patients during this critical time. This includes
          services from various domains. Our aim is to aid you. As much we can.
        </p>
        <button className="w-56 h-12 bg-red-600 text-white font-medium justify-self-end mt-12">
          LEARN MORE
        </button>
      </div>
      <div className="ban-second-item">
        <img
          src="/Assets/cover_img.png"
          alt="coverImg"
          className="w-custom-length h-custom-length"
        />
      </div>
    </div>
  );
};

export default Banner;
