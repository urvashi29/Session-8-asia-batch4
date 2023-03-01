import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  // this is unique key taht define where redux store the data
  reducerPath: "postApi",

  //   base query will request the data
  // RTK provides fetchBaseQuery, is a lighweight fetch wrapper that automatically handles request and response in a  similar way common libraries like axios or fetch

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  //set the opearations that we want to perform against the server
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    getUserById: builder.query({
      query: (id) => {
        console.log("ID", id);
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
    }),

    postUser: builder.mutation({
      query: ({ ...patch }) => ({
        url: "",
        method: "POST",
        body: patch,
      }),
    }),
  }),
});

// add "use" and "query" in beginning and end
export const { useGetAllUserQuery, useGetUserByIdQuery } = postApi;