import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
  status: "idle",
  newprodIndex: 0,
  secondIndex: 3,
  thirdIndex: 2,
  data: [],
  singleprodid: "",
  isPaymentOver: false,
};

const url =
  "https://real-time-amazon-data.p.rapidapi.com/search?query=Appliances&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b16cd0857fmshe18c4bb2fcdffd7p10d198jsn5590571c952a",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    nextClickfornewProd: (state) => {
      state.newprodIndex = state.newprodIndex + 1;
    },
    prevClickfornewProd: (state) => {
      state.newprodIndex = state.newprodIndex - 1;
    },
    nextClickForSecondProd: (state) => {
      state.secondIndex = state.secondIndex + 1;
    },
    prevClickForSecondProd: (state) => {
      state.secondIndex = state.secondIndex - 1;
    },
    nextClickForThirdProd: (state) => {
      state.thirdIndex = state.thirdIndex + 1;
    },
    prevClickForThirdProd: (state) => {
      state.thirdIndex = state.thirdIndex - 1;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSingleProdId: (state, action) => {
      state.singleprodid = action.payload;
    },
    setIsPaymentOver: (state, action) => {
      state.isPaymentOver = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success";
        state.products = action.payload.data.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {
  nextClickfornewProd,
  prevClickfornewProd,
  nextClickForSecondProd,
  prevClickForSecondProd,
  nextClickForThirdProd,
  prevClickForThirdProd,
  setData,
  setSingleProdId,
  setIsPaymentOver,
} = productsSlice.actions;
export default productsSlice.reducer;
