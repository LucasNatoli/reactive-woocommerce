import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { localService } from '../../services'

const authHeader = () => {
  var token = localService.getToken()
  if (token) return { 'Authorization': 'Bearer ' + token }
  return {}
}

export const apiSlice = createApi({

  reducerPath: 'api', // The cache reducer expects to be added at `state.api` (already default - this is optional)
  //baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/v1/woo' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://xiki.elhosting.cloud/rest/v1/woo' }),
  tagTypes: ["Stores"],
  endpoints: builder => ({
    getStores: builder.query({
      query: () => ({
        url: '/stores',
        headers: authHeader(),
      }),
      providesTags: ["Stores"]
    }),
    getStore: builder.query({
      query: (storeId) => ({
        url: `/stores/${storeId}`,
        headers: authHeader()
      })
    }),
    addStore: builder.mutation({
      query: (store) => ({
        url: '/stores',
        method: 'POST',
        headers: authHeader(),
        body: store
      }),
      invalidatesTags: ["Stores"]
    })
  })
})

// Export the auto-generated hooks for the endpoints
export const {
  useGetStoresQuery,
  useGetStoreQuery,
  useAddStoreMutation
} = apiSlice