"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import ProdWithPrice from "../components/home/ProdWithPrice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchProducts } from "../redux/slices/InfiniteScroll";
import Loading from "../components/home/Loading";
import { dummyData } from "../components/home/Products";
import { FaChevronDown } from "react-icons/fa";
import { setIsPaymentOver } from "../redux/slices/ProductsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const [Allproductsdata, setAllProducts] = useState([]);
  const { products, newprodIndex, secondIndex, data, thirdIndex, status } =
    useSelector((state) => state.products);
  const [hasMore, setHasMore] = useState(true);
  const [prod, setProd] = useState(false);

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("products");
    if (dataFromLocal) {
      setAllProducts(JSON.parse(dataFromLocal));
      setProd(true);
    }
    console.log("data", data);
    dispatch(setIsPaymentOver(false));
  }, [prod]);

  const fetchMore = () => {
    setAllProducts([...Allproductsdata, ...Allproductsdata]);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full h-custom-length628">
        <img
          src="/Assets/Header.png"
          className="w-full h-custom-length628 object-cover"
          alt="Header"
        />
      </div>
      <div className="flex my-8 gap-5">
        <div className="w-custom-length514 px-5 ">
          <div className="mt-2 w-24 border-b-2 ">
            <div className=" mt-1 flex items-center gap-11 w-40 px-3 py-2">
              <span>COMPANY</span>
            </div>
          </div>
          <div className="mt-2 w-24 border-b-2 ">
            <div className=" mt-1 flex items-center gap-11 w-40 px-3 py-2">
              <span>PAGE</span>
            </div>
          </div>
          <div className="mt-2 w-28 border-b-2 ">
            <div className=" mt-1 flex items-center gap-11 w-40 px-3 py-2">
              <span> CATEGORIES</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 ml-16">
          <div className="flex justify-between w-full">
            <div className="text-lg font-semibold">
              {Allproductsdata.length} &nbsp;Products
            </div>
            <div className="flex justify-between items-center mr-5 gap-3 border-2 px-6 py-2">
              <span>Sort</span>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <InfiniteScroll
            dataLength={Allproductsdata.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={<Loading />}
            className="flex flex-wrap gap-8 overflow-hidden"
          >
            {Allproductsdata.map((item, index) => (
              <Link key={item.asin} href={`/allproducts/${item.asin}`}>
                <ProdWithPrice
                  img={item.product_photo}
                  title={item.product_title}
                  price={item.product_price}
                />
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
