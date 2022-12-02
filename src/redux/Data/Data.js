import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH__PRODUCT = 'Fetch-product';

const fetchUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
// Reducers

const productArr = [];

export const prodReducer = (state = productArr, action) => {
  switch (action.type) {
    case FETCH__PRODUCT:
      return action.product;
    default:
      return state;
  }
};

// Action to fetch data

const fetchProducts = createAsyncThunk(FETCH__PRODUCT, async (post, { dispatch }) => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  dispatch({
    type: FETCH__PRODUCT,
    product: data,
  });
});

export default fetchProducts;
