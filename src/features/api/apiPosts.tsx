import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post {
    id: number;
    title: string;
    body: string;
  }

export const apiPosts = createApi({
    reducerPath:'apiPosts',
    baseQuery: fetchBaseQuery({ baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) =>({
        getApiPosts: builder.query<Post[], void>({
            query:() => `posts`
        })
    })
})

export const {useGetApiPostsQuery} = apiPosts;