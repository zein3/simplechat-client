import { createSlice } from '@reduxjs/toolkit'

const testInitialState = [
  {
    senderUsername: 'Tester #1',
    senderIp: '192.168.1.1',
    message: 'This is just a test',
    isFromMe: true
  },
  {
    senderUsername: 'Tester #2',
    senderIp: '195.213.41.21',
    message: 'This is also just a test',
    isFromMe: false
  }
]

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    value: testInitialState
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
