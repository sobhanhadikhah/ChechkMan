
import { createSlice } from "@reduxjs/toolkit";
export const todoSlice  = createSlice({
  name:"todos",
  initialState:{
    todo:[],
    
  },
  reducers:{
      addTodo:(state,action)=>{
          state.todo.push(action.payload);
      },
      toggleTodo:(state,action)=>{
        const todo = state.todo.find((todo)=> todo.id=== action.payload)
        if (todo) {
        todo.completed = !todo.completed;
        }
      },
      removeTodo:(state,action)=>{
        state.todo = state.todo.filter((todo)=>todo.id !== action.payload )
           
      }
  }
})
  
  
export const {addTodo,toggleTodo,removeTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer