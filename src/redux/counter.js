import { createSlice } from '@reduxjs/toolkit'



//A createSlice is something that's made up of your state, reducers, and actions in those reducers. In regular redux you would have to define each one of these seperately. However, with redux toolkit there's Slice and through this the createSlice function you can define your state, reducers and actions all in one place and alot more clean and simpler way.

export const counterSlice = createSlice({

  //name of slice is counter
  //object called reducers which will be everything that touches your state, actions and reducers that modify it
  //increment:, decrement:, and incrementByAmount: are all actions
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//Reducers 
export default counterSlice.reducer;