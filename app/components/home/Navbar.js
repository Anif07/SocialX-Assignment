import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../../styles/home.module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className={`navUpper h-10 border `}
        style={{ border: "1px solid #D2D2D2" }}
      >
        <ul className="flex justify-end gap-3 mx-8 m-2 text-xs">
          <li>Return</li>
          <li>Help</li>
          <li>Register/Sign in</li>
        </ul>
      </div>
      <div className="navLower h-36 flex justify-between px-14 items-center">
        <div>
          <img src="/Assets/Search.png" alt="searchicon" className="w-5 h-5" />
        </div>
        <div className=" w-3/4 ml-20" style={{ width: "65%" }}>
          <ul className="flex  justify-between items-center">
            <li className="mx-5">
              <Link href="/" className="macc">
                SHOP
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/" className="essential">
                ESSENTIALS
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <div className="flex flex-col">
                  <span
                    className={`text-custon-40px text-center ml-5 italic leading-10 ${style.macc}`}
                  >
                    Macc
                  </span>
                  <span
                    className={`text-custon-40px text-center italic leading-10 ${style.essential}`}
                  >
                    Essential
                  </span>
                </div>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/allproducts">BEST SELLERS</Link>
            </li>
            <li className="mx-5">
              <Link href="/">ABOUT US</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-28 justify-between">
          <img
            src="/Assets/profile_img.png"
            alt="searchicon"
            className="w-5 h-5"
          />
          <img src="/Assets/Path.png" alt="searchicon" className="w-5 h-5" />
          <img
            src="/Assets/shopping_img.png"
            alt="searchicon"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
