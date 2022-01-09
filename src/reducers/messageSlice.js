import { createSlice } from '@reduxjs/toolkit'
import { getMessages, storeMessages } from '../services/storageService'

const initialState = {
  value: getMessages()
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    resetMessages: (state) => {
      state.value = [];
      storeMessages([]);
    },
    pushMessage: (state, action) => {
      state.value = [...state.value, action.payload];
      storeMessages(state.value);
    }
  }
})

export const { resetMessages, pushMessage } = messageSlice.actions

export default messageSlice.reducer
