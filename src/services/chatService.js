import { io } from 'socket.io-client'

const baseUrl = 'ws://localhost:6001';

const socket = io(baseUrl);

const emit = () => socket.emit('tes');
console.log('tes');

export default emit

