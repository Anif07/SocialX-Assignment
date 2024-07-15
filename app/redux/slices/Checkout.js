"use client";
import { createSlice } from "@reduxjs/toolkit";
import { check } from "prettier";
import { act } from "react";

const Checkout = createSlice({
  name: "Checkout",
  initialState: {
    firstname: "",
    lastname: "",
    number: "",
    pincode: "",
    city: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});
export const { setFirstName, setLastName, setNumber, setCity, setPincode } =
  Checkout.actions;
export default Checkout.reducer;
