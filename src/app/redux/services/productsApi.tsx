import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URL = 'https://dummyjson.com/products'
export const productsApi = createApi({
  reducerPath: 'productsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search }) => ({
        url: `/search?q=${search}`,
        method: 'GET',
        isAuthorised: true,
      }),
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => ({
        url: `/${id}`,
        method: 'GET',
        isAuthorised: true,
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: `/categories`,
        method: 'GET',
        isAuthorised: true,
      }),
    }),
    getCategoryProducts: builder.query({
      query: ({ category }) => ({
        url: `/category/${category}`,
        method: 'GET',
        isAuthorised: true,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCategoriesQuery,
  useGetCategoryProductsQuery,
} = productsApi
