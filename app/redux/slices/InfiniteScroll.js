import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
  page: 1, // Track current page
  hasMore: true, // Flag to check if there are more products to load
};

const url = (page) =>
  `https://real-time-amazon-data.p.rapidapi.com/search?query=Appliances&page=${page}&country=US&sort_by=RELEVANCE&product_condition=ALL`;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a9d12f4a44msh2f8dc13c01c1c07p1b4060jsnf1620aa183a7",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

export const fetchProducts = createAsyncThunk(
  "infiniteScroll/fetchProducts",
  async (page) => {
    const response = await fetch(url(page), options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

const infiniteScrollSlice = createSlice({
  name: "infiniteScroll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = [...state.products, ...action.payload];
        state.page++;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default infiniteScrollSlice.reducer;
