import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './reducers/usernameSlice'
import messageReducer from './reducers/messageSlice'

export default configureStore({
  reducer: {
    username: usernameReducer,
    messages: messageReducer
  }
})
