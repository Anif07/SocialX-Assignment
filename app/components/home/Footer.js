import Link from "next/link";
import React from "react";
import style from "../../styles/home.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-96 px-16 py-10 mt-10">
      <div className="flex justify-between ">
        <div className="flex h-32 w-custom-length623 justify-around items-center">
          <div>
            <div className="flex flex-col">
              <span
                className={`text-custon-54px text-center italic leading-10 ${style.macc}`}
              >
                Macc
              </span>
              <span
                className={`text-custon-54px text-center italic  ${style.essential}`}
              >
                Essential
              </span>
            </div>
          </div>
          <div>
            <ul>
              <li className="my-2">
                <Link className="text-lg" href="/">
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-lg" href="/">
                  Collection
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-lg" href="/">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="my-2">
                <Link className="text-lg" href="/">
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-lg" href="/">
                  Contact
                </Link>
              </li>
              <li className="my-2">
                <Link className="text-lg" href="/">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-56 w-custom-length428 flex flex-col justify-between mt-5 ">
          <p className="text-lg">
            Be the first to know about our biggest and best sales. We&apos;ll
            never send more than one email a month.
          </p>
          <div>
            <div className="flex">
              <input type="email" placeholder="ENTER YOUR EMAIL" />
              <img src="/Assets/ic_mail_outline_24px.png" />
            </div>
            <div className="border mt-2 border-solid w-64 border-black"></div>
          </div>
          <div className="flex">
            <ul className="flex gap-3">
              <li className="bg-blue-600 h-9 w-9 flex justify-center items-center rounded-full">
                <Link href="/">
                  <FaTwitter className="text-lg text-white" />
                </Link>
              </li>
              <li className="bg-blue-600 h-9 w-9 flex justify-center items-center rounded-full">
                <Link href="/">
                  <FaLinkedinIn className="text-lg text-white" />
                </Link>
              </li>
              <li className="bg-blue-600 h-9 w-9 flex justify-center items-center rounded-full">
                <Link href="/">
                  <FaFacebookF className="text-lg text-white" />
                </Link>
              </li>
              <li className="bg-blue-600 h-9 w-9 flex justify-center items-center rounded-full">
                <Link href="/">
                  <FaInstagram className="text-lg text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-xl">All rights are reserved</div>
    </div>
  );
};

export default Footer;
