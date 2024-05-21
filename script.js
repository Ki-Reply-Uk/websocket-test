const socket = new WebSocket('ws://localhost:8765');

socket.onopen = function() {
    console.log('WebSocket connection established');
};

socket.onmessage = function(event) {
    console.log('Message from server: ', event.data);
    if (event.data === "hard_refresh") {
        console.log('Performing hard refresh');
        location.reload(true); // Forces a hard refresh
        console.log('Hard refresh complete');
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
