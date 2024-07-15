"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/home/Footer";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../components/home/Navbar";
import { setIsPaymentOver } from "../redux/slices/ProductsSlice";

const Payment = () => {
  const { firstname, lastname, number, pincode, city } = useSelector(
    (state) => state.checkout
  );
  const dispatch = useDispatch();
  const { products, data, singleprodid } = useSelector(
    (state) => state.products
  );
  const [isPopup, setPopup] = useState(false);

  return (
    <div className={`relative ${isPopup && "black"}`}>
      <Navbar />
      <form>
        <div className="flex justify-between items-center px-14 h-custom-length600">
          <div className="w-custom-length592">
            <h1 className="text-4xl font-bold my-2 mb-3">PAYMENT</h1>
            <div className="flex items-center p-3 gap-3 border-2">
              <input type="radio" name="payment" id="bitcoin" />
              <label htmlFor="bitcoin" className="cursor-pointer">
                Bitcoin
              </label>
            </div>
            <div className="flex items-center p-3 gap-3 border-2">
              <input type="radio" name="payment" id="Apple" />
              <label htmlFor="Apple" className="cursor-pointer">
                Apple wallet
              </label>
            </div>{" "}
            <div className="flex items-center p-3 gap-3 border-2">
              <input type="radio" name="payment" id="Paypal" />
              <label htmlFor="Paypal" className="cursor-pointer">
                Paypal
              </label>
            </div>{" "}
            <div className="flex items-center p-3 gap-3 border-2">
              <input type="radio" name="payment" id="Debit" />
              <label htmlFor="Debit" className="cursor-pointer">
                Debit / Credit card
              </label>
            </div>
            <div>
              <h2 className="font-bold text-xl my-4">Delivery Address</h2>
              <input
                type="text"
                id="address"
                placeholder="9855211068"
                className="w-full my-2 border-2 p-2"
                value={number}
              />
              <input
                type="text"
                id="address"
                placeholder="john wick"
                className="w-full my-2 border-2 p-2"
                value={firstname + lastname}
              />
              <input
                type="text"
                id="firstname"
                placeholder="12-136"
                className="border-2 p-2 mr-5 w-custom-length48%"
                value={city}
              />
              <input
                type="text"
                id="lastname"
                placeholder="515004"
                className="border-2 p-2 w-custom-length48%"
                value={pincode}
              />
            </div>
            <div className="flex items-center justify-between mt-5">
              <p className="flex items-center gap-3">
                <FaChevronLeft />
                Go back to Cart
              </p>
              <Link href="/payment">
                <button
                  type="submit"
                  className="bg-red-600 text-gray-50 p-3 w-52 font-bold text-lg"
                  onClick={() => {
                    setPopup(true);
                  }}
                >
                  Pay
                </button>
              </Link>
            </div>
          </div>
          <div className="w-custom-length592 h-custom-length530">
            <Image
              src="/Assets/payment.png"
              alt="checkout"
              className="w-custom-length592"
              width="579"
              height="550"
            />
          </div>
        </div>
      </form>
      {/* Pop up */}
      {isPopup && (
        <div className="flex flex-col w-custom-length592 h-custom-length628 absolute top-52 left-1/2 translate-x-translate bg-white popup z-10">
          <span
            className="absolute top-3 right-3 bg-slate-700 text-white w-7 h-7 flex justify-center items-start rounded-full"
            onClick={() => setPopup(false)}
          >
            <span className="cursor-pointer" style={{ marginTop: "2px" }}>
              X
            </span>
          </span>
          <div className="w-full">
            <img
              src="/Assets/paysuccess.png"
              alt="payment successful"
              className="object-cover h-custom-length360 w-full"
            />
          </div>
          <div className="flex flex-col items-center gap-4 p-5">
            <h1>Order Placed Successfully</h1>
            <p className="text-center w-72">
              Your Order Has Been Placed Successfull Well Try To Ship It To Your
              Door Step As Soon We Can. Cheers
            </p>
            <Link href={`/allproducts/${singleprodid}`}>
              <button
                className="w-72 h-10 bg-bg-color-success text-white mt-6"
                onClick={() => dispatch(setIsPaymentOver(true))}
              >
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Payment;
