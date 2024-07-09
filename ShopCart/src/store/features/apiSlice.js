import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
    reducerPath: "rootApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000/`
    }),
    tagTypes: [`products`],

    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => `products`,
            invalidatesTags: [`products`]
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: `products`,
                method: `POST`,
                body: product
            }),
            invalidatesTags: [`products`]
        }),

        removeProduct: builder.mutation({
            query: (prodId) => ({
                url: `products/${prodId}`,
                method: `DELETE`
            }),
            invalidatesTags: [`products`]
        })

    })
})

export const {
    useGetAllProductsQuery,
    useCreateProductMutation,
    useRemoveProductMutation,
} = rootApi