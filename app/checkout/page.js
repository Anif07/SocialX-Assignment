"use client";
import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setCity,
  setFirstName,
  setLastName,
  setNumber,
  setPincode,
} from "../redux/slices/Checkout";
import Link from "next/link";

const Checkout = () => {
  const { firstname, lastname, number, pincode, city } = useSelector(
    (state) => state.checkout
  );
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, number);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={submitHandle}>
        <div className="flex justify-between items-center px-16 h-custom-length600">
          <div className="w-custom-length592">
            <h1 className="text-4xl font-bold my-2">CHECKOUT</h1>
            <h4 className="text-xl font-bold my-3">Delivery Address</h4>
            <input
              type="text"
              id="firstname"
              placeholder="John"
              className="border-2 p-2 mr-3 w-custom-length45%"
              onChange={(e) => dispatch(setFirstName(e.target.value))}
              required
            />
            <input
              type="text"
              id="lastname"
              placeholder="Wick"
              className="border-2 p-2 w-custom-length45%"
              onChange={(e) => dispatch(setLastName(e.target.value))}
              required
            />
            <br />
            <input
              type="text"
              id="address"
              placeholder="street 32, pasror road, Dasaka"
              className="w-11/12 my-3 border-2 p-2"
            />
            <input
              type="text"
              id="address2"
              placeholder="N/A"
              className="w-11/12 my-3 border-2 p-2"
            />
            <input
              type="text"
              id="pincode"
              placeholder="51010"
              className="border-2 p-2 mr-3 w-custom-length45%"
              onChange={(e) => dispatch(setPincode(e.target.value))}
              required
            />
            <input
              type="text"
              id="city"
              placeholder="Sialkot"
              className="border-2 p-2 w-custom-length45%"
              onChange={(e) => dispatch(setCity(e.target.value))}
              required
            />
            <input
              type="text"
              id="number"
              placeholder="+9245853565"
              className="w-11/12 my-3 border-2 p-2"
              onChange={(e) => dispatch(setNumber(e.target.value))}
              required
            />
            <div className="flex items-center justify-between mt-3">
              <p className="flex items-center gap-3">
                <FaChevronLeft />
                Go back to Cart
              </p>
              <Link href="/payment">
                <button
                  type="submit"
                  className="bg-red-600 text-gray-50 p-3 mr-12"
                >
                  Save and Continue
                </button>
              </Link>
            </div>
          </div>
          <div className="w-custom-length592 h-custom-length530">
            <Image
              src="/Assets/checkout.png"
              alt="checkout"
              className="w-custom-length592"
              width="579"
              height="550"
            />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Checkout;
