"use client";
import React, { Fragment, useEffect, useState } from "react";
import Prod from "./Prod";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProdWithPrice from "./ProdWithPrice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  nextClickfornewProd,
  nextClickForSecondProd,
  nextClickForThirdProd,
  prevClickfornewProd,
  prevClickForSecondProd,
  prevClickForThirdProd,
  setData,
} from "@/app/redux/slices/ProductsSlice";
import Loading from "./Loading";
import axios from "axios";

// Function to fetch data
// const url =
//   "https://real-time-amazon-data.p.rapidapi.com/search?query=Appliances&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
// // const options = {
// //   method: "GET",
// //   headers: {
// //     "x-rapidapi-key": "a9d12f4a44msh2f8dc13c01c1c07p1b4060jsnf1620aa183a7",
// //     "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
// //   },
// // };

// async function fetchData() {
//   const res = await fetch(url, options);
//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   }
//   return res.json();
// }

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { products, newprodIndex, secondIndex, data, thirdIndex, status } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);
  const productsperPage = 3;
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("products");
    if (!dataFromLocal) {
      dispatch(fetchProducts());
    } else {
      dispatch(setData(JSON.parse(dataFromLocal)));
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
      dispatch(setData(products));
      setLoading(false);
    }
  }, [products]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>Your monthly Quota for fetching data is completed</div>;
  }

  //   const visibleProducts = data.slice(startIndex, startIndex + productsperPage);
  const visibleProducts = data.slice(
    newprodIndex,
    newprodIndex + productsperPage
  );
  const visibleProductsforPrice = data.slice(secondIndex, secondIndex + 2);
  const visibleProductsforThirdPrice = data.slice(thirdIndex, thirdIndex + 2);

  return (
    <>
      <div className="px-10 my-14">
        <h2 className="text-4xl font-bold font-font-pop text-center my-4">
          <span className="text-red-700">NEW</span>
          <span className="text-blue-700">PRODUCTS</span>
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
      <div className="h-custom-length672 flex justify-between items-center">
        <div className="w-custom-length592">
          <img
            src="/Assets/Feature_img1.png"
            alt="discount"
            className="w-custom-length592 h-custom-length672 object-cover"
          />
        </div>
        <div className="flex-1 ml-14">
          <div className="flex justify-between pr-5">
            <h1 className="font-font-pop font-bold font text-4xl">
              <span className="text-red-700">MACC</span> WEEKLY DISCOUNT
            </h1>
            <Link href="/allproducts">
              <button className="w-32 h-10 bg-bg-color-button">VIEW ALL</button>
            </Link>
          </div>
          <div className="flex overflow-hidden gap-2 justify-between relative pr-14 mt-4">
            {secondIndex !== 0 && (
              <button
                onClick={() => dispatch(prevClickForSecondProd())}
                className="absolute inset-y-1/2 w-10 h-10 rounded-full bg-white shadow flex justify-center items-center translate-y-translate"
                style={{
                  left: "40px",
                }}
              >
                <FaAngleLeft />
              </button>
            )}
            {visibleProductsforPrice.map((item, index) => (
              <Link key={index} href={`/allproducts/${item.asin}`}>
                <ProdWithPrice
                  key={index}
                  img={item.product_photo}
                  title={item.product_title}
                  price={item.product_price}
                />
              </Link>
            ))}
            {secondIndex !== data.length - 3 && (
              <button
                onClick={() => dispatch(nextClickForSecondProd())}
                className="absolute inset-y-1/2 right-10 w-10 h-10 rounded-full bg-white flex justify-center items-center translate-y-translate shadow"
                style={{ transform: "translateY(-50%)" }}
              >
                <FaAngleRight />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Last products */}
      <div className="h-custom-length672 flex justify-between items-center my-8">
        <div className="flex-1 ml-14">
          <div className="flex justify-between px-5">
            <h1 className="font-font-pop font-bold font text-4xl">
              <span className="text-red-700">MACC</span> WEEKLY DISCOUNT
            </h1>
            <Link href="/allproducts">
              <button className="w-32 h-10 bg-bg-color-button">View All</button>
            </Link>
          </div>
          <div className="flex overflow-hidden gap-2 justify-between relative pr-14 mt-4">
            {thirdIndex !== 0 && (
              <button
                onClick={() => dispatch(prevClickForThirdProd())}
                className="absolute inset-y-1/2 w-10 h-10 rounded-full bg-white shadow flex justify-center items-center translate-y-translate"
                style={{
                  left: "40px",
                }}
              >
                <FaAngleLeft />
              </button>
            )}
            {visibleProductsforThirdPrice.map((item, index) => (
              <Link key={index} href={`/allproducts/${item.asin}`}>
                <ProdWithPrice
                  key={index}
                  img={item.product_photo}
                  title={item.product_title}
                  price={item.product_price}
                />
              </Link>
            ))}
            {thirdIndex !== data.length - 3 && (
              <button
                onClick={() => dispatch(nextClickForThirdProd())}
                className="absolute inset-y-1/2 right-10 w-10 h-10 rounded-full bg-white flex justify-center items-center translate-y-translate shadow"
                style={{ transform: "translateY(-50%)" }}
              >
                <FaAngleRight />
              </button>
            )}
          </div>
        </div>
        <div className="w-custom-length592 order-2">
          <img
            src="/Assets/bg.png"
            alt="discount"
            className="w-custom-length592 h-custom-length672 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
