const socket = new WebSocket('ws://localhost:8765');

socket.onopen = function() {
    console.log('WebSocket connection established');
};

socket.onmessage = function(event) {
    if (event.data === "refresh") {
        console.log('Refreshing the page');
        location.reload();
    }
};

socket.onclose = function() {
    console.log('WebSocket connection closed');
};

function sendMessage() {
    const message = 'Hello, server!';
    socket.send(message);
    console.log('Message sent: ', message);
}
