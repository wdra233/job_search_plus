import io from 'socket.io-client';

const socket = io("ws://localhost:4000")

socket.on('receiveMsg', function(data) {
    console.log('Browser receive msg', data)
})

socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
console.log('Browser send msg to server', {name: 'Tom', date: Date.now()})