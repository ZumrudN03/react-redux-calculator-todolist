import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import calculatorReduser from './calculatorSlice'


export default configureStore({
  reducer: {
    todo: todoReducer,
    calculator: calculatorReduser,
  },
})