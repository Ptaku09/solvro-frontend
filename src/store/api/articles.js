import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3',
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    getArticles: builder.mutation({
      query: (amount = 10) => ({
        url: `/articles?_limit=${amount}`,
        method: 'GET',
      }),
      providesTags: ['Articles'],
    }),

    getArticleById: builder.mutation({
      query: (id) => ({
        url: `/articles/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Articles'],
    }),
  }),
});

export const { useGetArticlesMutation, useGetArticleByIdMutation } = articlesApi;
