import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authHeader = (token) => {
  if (token) return { 'Authorization': 'Basic ' + token }
  return {}
}

export const wooSlice = createApi({

  reducerPath: 'woo',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://thisurl/dont/matter' }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: ({url, token}) => {
        return {
        url: url + '/wp-json/wc/v3/products',
        headers: authHeader(token),
      }},
    }),
    getOrders: builder.query({
      query: ({url, token}) => {
        return {
        url: url + '/wp-json/wc/v3/orders',
        headers: authHeader(token),
      }},
    }),
    getCustomers: builder.query({
      query: ({url, token}) => {
        return {
        url: url + '/wp-json/wc/v3/customers',
        headers: authHeader(token),
      }},
    }),
  })
})

// Export the auto-generated hooks for the endpoints
export const {
  useGetProductsQuery,
  useGetOrdersQuery, 
  useGetCustomersQuery,
} = wooSlice