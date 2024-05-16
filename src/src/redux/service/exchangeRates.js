import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
const exchangeApiHeaders = {
    "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  };
  const baseUrl = "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=USD ";
  
  const createRequest = (url) => ({ url, headers: exchangeApiHeaders });
  

  export const exchangeApi = createApi({
    reducerPath: "exchangeApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getExchange: builder.query({
        query: () => createRequest(),
      }),
    }),
  });
  
  export const {
    useGetExchangeQuery,
  } = exchangeApi;