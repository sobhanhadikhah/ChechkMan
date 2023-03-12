import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "./reducer";
 const store = configureStore({
        reducer:{
            todoReducerState:todoReducer
        }
})
export default store