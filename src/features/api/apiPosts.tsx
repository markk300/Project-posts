import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: number;
  name: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
}
interface Comments {
    id:number;
    name:string;
    body:string;
    email:string
}

export const apiPosts = createApi({
  reducerPath: 'apiPosts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getApiPosts: builder.query<Post[], void>({
      query: () => `posts`,
    }),
    getCommentsById: builder.query<Comments[], number>({
      query: (id) => `posts/${id}/comments`,
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetApiPostsQuery, useGetCommentsByIdQuery, useGetUserByIdQuery } = apiPosts;
