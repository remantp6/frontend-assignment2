import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and endpoint
export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getAllUsersByUsername: builder.query({
      query: (username) => `users/${username}`,
    }),
  }),
})

export const { useGetAllUsersByUsernameQuery } = usersApi;