import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExchanges = createAsyncThunk(
  "getexchanges",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=USD",
        params: {
          from: "USD",
          to: "EUR,GBP,ZAR,UGX",
        },
        headers: {
          "x-rapidapi-host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      };
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    isLoading: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchExchanges.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchExchanges.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.exchangeData = action.payload;
      })
      .addCase(fetchExchanges.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.exchangeData = null;
      });
  },
});

export default exchangeSlice.reducer;
