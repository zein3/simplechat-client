import { io } from 'socket.io-client'
import store from '../store'
const baseUrl = 'http://192.168.1.8:6001';
const socket = io(baseUrl);

export const sendMessage = (message) => {
  const state = store.getState();
  const senderUsername = state.username.value;
  const myMessage = {
    senderUsername,
    message
  }

  socket.emit("message", myMessage);
}


