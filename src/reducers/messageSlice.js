import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    value: []
  },
  reducers: {
    resetMessages: (state) => {
      state.value = [];
    },
    pushMessage: (state, action) => {
      state.value = [...state.value, action.payload];
    }
  }
})

export const { resetMessages, pushMessage } = messageSlice.actions

export default messageSlice.reducer
