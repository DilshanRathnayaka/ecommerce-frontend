import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productAPI = createApi({
    reducerPath:"productAPI",
    baseQuery:fetchBaseQuery({baseUrl:"https://ecommerceback.onrender.com"}),
    endpoints:(builder)=>({
        getAllProducts :builder.query({
            query:()=>"/api/Product",
        }),
    }),
});

export const {useGetAllProductsQuery} = productAPI