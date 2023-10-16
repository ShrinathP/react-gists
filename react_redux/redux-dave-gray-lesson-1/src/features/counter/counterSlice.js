import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// createslice {name, initialState, reducers/actions }
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
        state.count = 0;
    },
    incrementByAmount: (state, action) => {
        state.count += action.payload;
    }
  },
});

// export actions - used in the component
// export reducer - used to configure in store
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
