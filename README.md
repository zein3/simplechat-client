# Simplechat Webclient
## About
This is a simple website where user can send message to all other users. I made this to learn more about react.  
There is only one 'chatroom', so users can't send messages privately to other users.  
Server is available [here](https://github.com/zein3/simplechat-server)  
  
Video Demo:  
https://raw.githubusercontent.com/zein3/simplechat-client/main/demo/simplechat.mp4  

App Demo:  
https://glacial-chamber-87569.herokuapp.com/
  

## Installation
1. Clone this repository
```bash
git clone https://github.com/zein3/simplechat-client.git
```
2. Install dependencies
```bash
npm install
```
3. Set the websocket server on the file src/services/chatService on a variable named baseUrl  
4a. Run the website
```bash
npm start
```
4b. Or if you want to test the website over lan
```bash
HOST=0.0.0.0 npm start
```
