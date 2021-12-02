import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3',
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => '/articles?_limit=20',
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

export const { useGetArticlesQuery, useGetArticleByIdMutation } = articlesApi;
