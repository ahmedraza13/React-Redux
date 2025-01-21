import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//actionName
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    //we create these action for extraReducer
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts } = productSlice.actions; // action automatically created in case of simple reducer
export default productSlice.reducer;
