import { createSlice } from '@reduxjs/toolkit'
import { getUsername, storeUsername } from '../services/storageService'

const initialState = {
  value: getUsername()
}

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.value = action.payload;
      storeUsername(action.payload);
    }
  }
})

export const { setUsername } = usernameSlice.actions

export default usernameSlice.reducer
