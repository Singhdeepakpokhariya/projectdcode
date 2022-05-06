import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
reducerPath: 'postApi',
baseQuery: fetchBaseQuery({
    baseUrl:"https://liveapi.dcodeai.com",    
}),

endpoints :(builder)=>({
    // getAllPost: builder.mutation({
    //     query:()=>({
    //          url:'posts',
    //          method:'POST'
    //     })
    // }),
    createPost : builder.mutation({
        query:(newPost)=>{
            console.log("Create Post:", newPost)
            return{
                url:`users/studentLogin/login`,
                method:'POST',
                body: newPost,
                header:{
                    'Content-type':'application/JSON; charset=UTF-8',
                }
            }
        }
        })
})


})
//  export const {useGetALLPostQuery}= postApi
 export const {useCreatePostMutation}= postApi