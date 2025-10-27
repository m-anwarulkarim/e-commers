import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "",
      transformResponse: (response: { products: Product[] }) =>
        response.products,
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `${id}`,
      providesTags: (_result, _error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
