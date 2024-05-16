const socket = new WebSocket('ws://localhost:8765');

socket.onopen = function() {
    console.log('WebSocket connection established');
};

socket.onmessage = function(event) {
    console.log('Message from server: ', event.data);
    displayMessage(event.data);
};

socket.onclose = function() {
    console.log('WebSocket connection closed');
};

function sendMessage() {
    const message = 'Hello, server!';
    socket.send(message);
    console.log('Message sent: ', message);
}

function displayMessage(message) {
    const messageDiv = document.getElementById('serverMessages');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    messageDiv.appendChild(newMessage);
}