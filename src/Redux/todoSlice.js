import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   
    addTodoText: (state, action) => {
      state.value.push(action.payload)
    },
    removeList: (state, action) => {
        state.value=state.value.filter((x)=>x.id!==action.payload)
        
    },
  },
})

export const { addTodoText,removeList } = todoSlice.actions

export default todoSlice.reducer