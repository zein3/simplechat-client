import { io } from 'socket.io-client'
import store from '../store'
import { pushMessage } from '../reducers/messageSlice'
const baseUrl = 'http://192.168.1.8:6001';
const socket = io(baseUrl);

const dispatchMessage = (message, isFromMe = false) => {
  const theMessage = {
    ...message,
    isFromMe
  }

  store.dispatch(pushMessage(theMessage));
}

export const sendMessage = (message) => {
  const state = store.getState();
  const senderUsername = state.username.value;
  const myMessage = {
    senderUsername,
    message
  }

  socket.emit("message", myMessage);
  dispatchMessage(myMessage, true);
}

export const listenForMessage = () => {
  socket.on('message', (message) => {
    dispatchMessage(message);
  })
}


