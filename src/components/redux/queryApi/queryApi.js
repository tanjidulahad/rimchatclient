import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userDetailsApi = createApi({
  reducerPath: 'userDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/'}),
  endpoints: (builder) => ({
    getUserDetailsApi: builder.query({
      
      query: () => {
        return { url: `user`, credentials: "include" };
      },
      
    }),
  }),
})

export const {useGetUserDetailsApiQuery}=userDetailsApi