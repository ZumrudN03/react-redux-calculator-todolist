import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculatorNum: (state, action) => {
      switch (action.payload.oper) {
        case "+":
          state.value = action.payload.num1 + action.payload.num2;
          break;
        case "-":
          state.value = action.payload.num1 - action.payload.num2;
          break;
        case "/":
            if (state.value===0) {
                alert("0'a bolme yoxdur!")
            }else{
                state.value = action.payload.num1 / action.payload.num2;
            }
          
          break;
        case "*":
          state.value = action.payload.num1 * action.payload.num2;
          break;
        default:
          break;
      }
    },
  },
});

export const { calculatorNum, answer } = calculatorSlice.actions;

export default calculatorSlice.reducer;
