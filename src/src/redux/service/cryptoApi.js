import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/",
  }),
  endpoints: (builder) => ({
    getCryptoById: builder.query({
      query: (id) =>
        `${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    }),
  }),
});

export const { useGetCryptoByIdQuery } = cryptoApi;
