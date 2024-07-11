import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
    reducerPath: "rootApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000/`
    }),
    tagTypes: ['products', 'reviews'],

    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => `products`,
            providesTags: ["products"]
        }),

        getProductById:builder.query({
            query:(prodId)=>`products/${prodId}`,
            providesTags:[`products`]
        }),

        addReview: builder.mutation({
            query: (review) => ({
              url: 'reviews',
              method: 'POST',
              body: review
            }),
            invalidatesTags: ['reviews']
          }),
          getReviewsByProductId: builder.query({
            query: (prodId) => `reviews?prodId=${prodId}`,
            providesTags: ["reviews"]
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: `products`,
                method: `POST`,
                body: product
            }),
            invalidatesTags: ['products']
        }),

        removeProduct: builder.mutation({
            query: (prodId) => ({
                url: `products/${prodId}`,
                method: `DELETE`
            }),
            invalidatesTags: ['products']
        }),
        updateProduct: builder.mutation({
            query:(product)=>({
                url: `products/${product.id}`,
                method:`PUT`,
                body:product
            }),
            invalidatesTags: ['products']
    })

    })
})

export const {
    useGetAllProductsQuery,
    useCreateProductMutation,
    useRemoveProductMutation,
    useUpdateProductMutation,
    useGetProductByIdQuery,
    useAddReviewMutation, 
    useGetReviewsByProductIdQuery
} = rootApi