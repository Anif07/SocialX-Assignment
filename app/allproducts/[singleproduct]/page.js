"use client";
import Navbar from "@/app/components/home/Navbar";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronDown,
  FaHeart,
} from "react-icons/fa";
import Footer from "@/app/components/home/Footer";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {
  nextClickfornewProd,
  prevClickfornewProd,
  setIsPaymentOver,
  setSingleProdId,
} from "@/app/redux/slices/ProductsSlice";
import Prod from "@/app/components/home/Prod";

const Page = ({ params }) => {
  const { products, data, status, isPaymentOver, newprodIndex } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const [isfav, setIsfav] = useState(false);
  const productsperPage = 3;

  const [Allproductsdata, setAllProducts] = useState([]);
  const singledata = Allproductsdata.find(
    (item) => item.asin === params.singleproduct
  );

  dispatch(setSingleProdId(params.singleproduct));
  const visibleProducts = Allproductsdata.slice(
    newprodIndex,
    newprodIndex + productsperPage
  );

  const [prod, setProd] = useState(false);
  console.log(data);
  const title = singledata?.product_title.split(",")[0];

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("products");
    if (dataFromLocal) {
      setAllProducts(JSON.parse(dataFromLocal));
      setProd(true);
    }
    console.log("data", data);
  }, [prod]);

  return (
    <div>
      <Navbar />
      {/* added to cart */}
      {isPaymentOver && (
        <div className="bg-green-600 h-9 text-white text-center flex items-center justify-center relative">
          <h1>
            SUCCESSFULLY ADDED TO CART.{" "}
            <span className="font-bold">CHECK NOW</span>
          </h1>
          <span
            className="absolute right-3 cursor-pointer"
            onClick={() => dispatch(setIsPaymentOver(false))}
          >
            X
          </span>
        </div>
      )}
      <div className="h-custom-length600 p-11 mb-16">
        <div className="h-custom-length530 w-custom-length1100 flex gap-6 m-auto">
          <div className="w-custom-length623 h-custom-length530">
            <div className="my-4">
              <Link href="/">Home</Link> /{" "}
              <Link href="/allproducts">Products</Link> / product
            </div>
            <div className="flex gap-6">
              <div className="w-24">
                <img
                  src={singledata?.product_photo}
                  alt="img"
                  className="w-24 h-24 object-cover mt-3 mix-blend-darken"
                />
                <img
                  src={singledata?.product_photo}
                  alt="img"
                  className="w-24 h-24 object-cover mt-3 mix-blend-darken"
                />
                <img
                  src={singledata?.product_photo}
                  alt="img"
                  className="w-24 h-24 object-cover mt-3 mix-blend-darken"
                />
                <img
                  src={singledata?.product_photo}
                  alt="img"
                  className="w-24 h-24 object-cover mt-3 mix-blend-darken"
                />
              </div>
              <div className="w-custom-length514 h-custom-length514 bg-bg-color-for-prod flex justify-center items-center">
                <img
                  src={singledata?.product_photo}
                  alt="prod"
                  className="w-custom-length428 h-custom-length428 object-cover mix-blend-darken"
                />
              </div>
            </div>
          </div>
          <div className="w-custom-length h-custom-length530 mt-12">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold text-3xl h-custom-length72 overflow-hidden">
                  {title}
                </h1>
                <span>
                  {isfav ? (
                    <FaHeart
                      className="text-2xl cursor-pointer text-red-600"
                      onClick={() => {
                        setIsfav(false);
                      }}
                    />
                  ) : (
                    <CiHeart
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        setIsfav(true);
                      }}
                    />
                  )}
                </span>
              </div>
              <h2 className="flex my-2 items-center text-red-600 font-bold text-lg">
                {singledata?.product_price}
              </h2>
            </div>
            <div>
              <Link href="/checkout">
                <button className="w-full h-11 bg-sky-800 text-white my-3">
                  ADD TO CART
                </button>
              </Link>
              <p>
                Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
                dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,
                condimentum est. Mauris arcu odio, vestibulum quis dapibus sit
                amet,
              </p>
              <div className="flex w-full border-2 align-middle justify-between p-2 my-3">
                <h3 className="w-4/5 text-center ">DESCRIPTION</h3>
                <FaChevronDown />
              </div>
              <div className="flex w-full border-2 align-middle justify-between p-2 my-1">
                <h3 className="w-4/5 text-center ">RETURN POLICY</h3>
                <FaChevronDown />
              </div>
              <div className="flex w-full border-2 align-middle justify-between p-2 my-1">
                <h3 className="w-4/5 text-center ">CITIZEN POLICY</h3>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 my-14">
        <h2 className="text-4xl font-bold font-font-pop text-center my-4">
          YOU MAY ALSO LIKE
        </h2>
        <div className="flex overflow-hidden gap-5 justify-between relative px-14">
          {newprodIndex !== 0 && (
            <button
              onClick={() => dispatch(prevClickfornewProd())}
              className="absolute inset-y-1/2 w-10 h-10 rounded-full bg-white shadow flex justify-center items-center translate-y-translate"
              style={{
                left: "40px",
              }}
            >
              <FaAngleLeft />
            </button>
          )}
          {visibleProducts.map((item, index) => (
            <React.Fragment key={index}>
              <Link href={`/allproducts/${item.asin}`}>
                <Prod
                  key={item.asin}
                  img={item.product_photo}
                  title={item.product_title}
                />
              </Link>
            </React.Fragment>
          ))}
          {newprodIndex !== data.length - 3 && (
            <button
              onClick={() => dispatch(nextClickfornewProd())}
              className="absolute inset-y-1/2 right-10 w-10 h-10 rounded-full bg-white flex justify-center items-center translate-y-translate shadow"
              style={{ transform: "translateY(-50%)" }}
            >
              <FaAngleRight />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
