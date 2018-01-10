var wsUri = "ws://echo.websocket.org/";
var output;
function init() {
    output = document.getElementById("output");
    testWebSocket();
}
function testWebSocket() {
    //create a WebSocket Obj, specifying the URL to connect to
    //unsecure Web Socket: use ws://protocol , default port: 80
    //secure Web Socket: use wss://protocol , default port: 443

    websocket = new WebSocket(wsUri);

    //WebSocket obj has the following properties  for handling
    //web socket events
    //onopen -- indicate the connection has been opened,
    //so you can start sending data to the server
    //onclose == indicate the connection has closed
    //onmessage = indicates a message has arrived from the server
    //onerror = indicates an error has occurred

    websocket.onopen = function (evt) { onOpen(evt); };
    websocket.onclose = function (evt) { onClose(evt); };
    websocket.onmessage = function (evt) { onMessage(evt); };
    websocket.onerror = function (evt) { onError(evt); };
}

function onOpen(evt) {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks in QA")
}
function onClose(evt) {
    writeToScreen("DISCONNECTED");
}

//evt.data : access the whole message from the main page
function onMessage(evt) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
    websocket.close();
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR: ' + evt.data + '</span>');
}

//invoke send() on the websocket object
//the data is buffered and sent asynchronously
function doSend(message) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

//word-wrap property allows long words to be able to be broken and wrap onto the next line.
//"break-word" value:Allows unbreakable words to be broken
function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener('load', init, false);