import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postApi } from "../Services/Post";
import { combineReducers } from "@reduxjs/toolkit";
import {reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  form:formReducer
})


export const store = configureStore({
    reducer:{
        [postApi.reducerPath]: postApi.reducer,
        rootReducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(postApi.middleware),
})
setupListeners(store.dispatch)