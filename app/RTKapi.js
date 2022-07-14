import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BACKEND_API /* defined in next.config.js */,
  //process.env.NODE_ENV === 'production' ? `http://localhost:5000/`, : 'http://w.x.y.z:5000/',
  credentials: "include",
  prepareHeaders: (headers) => {
    return headers;
  },
});

// Define a service using a base URL and expected endpoints
export const RTKapi = createApi({
  reducerPath: "RTKapi",
  baseQuery: baseQuery,
  tagTypes: ["Monitor"],

  endpoints: (builder) => ({
    //    getXyz: builder.query({ query: (qry) => ({ url: `Certificate...?`,}), providesTags: ['Certificates'], }),
    //    xyz: builder.mutation({ query: (body) => ({ url: `Invitation-SetStatus`, method: 'POST', body, }), invalidatesTags: ['Certificates'],}),

    // ---------- Filter APIs ----------
    cleanFilter: builder.mutation({
      query: () => ({ url: `filters`, method: "get" }),
      invalidatesTags: ["Monitor"],
    }),
    postNewFilter: builder.mutation({
      query: (body) => ({ url: `filters`, method: "post", body }),
      invalidatesTags: ["Monitor"],
    }),
    // --------- Filter APIs ---------

    // ---------- Sort APIs ----------
    clearSort: builder.mutation({
      query: () => ({ url: `sort`, method: "get" }),
      invalidatesTags: ["Monitor"],
    }),
    postSort: builder.mutation({
      query: (body) => ({ url: `sort`, method: "post", body }),
      invalidatesTags: ["Monitor"],
    }),
    // ---------- Sort APIs ----------
  }),
});

export const {
  // hooks for usage in functional components

  // --- Filter api hooks ---
  useCleanFilterMutation,
  usePostNewFilterMutation,

  // --- Sort api hooks ---
  useClearSortMutation,
  usePostSortMutation,

  // --- UserLevel api hooks ---
  useGetLOVUserLevelsQuery,
  useAddUserLevelMutation,
  useEdtUserLevelMutation,
  useRmvUserLevelMutation,

  // --- User api hooks ---
  useGetAllUsersMutation,
  useChngUsrPswrdMutation,
  useEdtUserMutation,
  useGetUserProfileQuery,
  useGetUsersQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterMutation,
  useRmvUserMutation,
} = RTKapi;
