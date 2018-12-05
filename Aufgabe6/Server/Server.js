"use strict";
const Http = require("http"); //ts-Datei wird importiert als Http von "http"
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // Konsole gibt "Starting server" aus 
    let port = process.env.PORT; // Variable port wird mit dem typ nummer deklariert und hat den einen wert vom Heroku-Server
    if (port == undefined)
        port = 8100; // port variable wird der wert 8100 gegeben 
    let server = Http.createServer(); // variable server wird vom typ Http.Server deklariert udn mit ihr wird ein Server kreiert ? (nicht sicher)
    server.addListener("request", handleRequest); // server Variable erh�lt einen Listener der auf ein "request" h�rt und dann die Funktion HandleRequest ausf�hrt
    server.addListener("listening", handleListen); // server erh�lt einen weiteren Listener ("listening"?) / in dem Fall wird Funktion handleListen ausgef�hrt
    server.listen(port); // server soll auf port variable h�ren
    function handleListen() {
        console.log("Listening"); // Konsole gibt "Listening" aus
    }
    function handleRequest(_request, _response) {
        // console.log("I hear voices!"); // Konsole gibt "I hear voices!" aus
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Parameter _response f�gt in den Header "content-type", "text/html; charset=utf-8" hinzu
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Parameter _response f�gt in den Header "Access-Control-Allow-Origin", "*" ein (das js datei und der Server kompatibel sind, Server auf den Code zugreifen kann, wei� leider nicht genau was das macht)
        let url = Url.parse(_request.url, true).query;
        for (let key in url) {
            console.log(url[key]);
            console.log(key);
            _response.write(key + " = " + url[key] + "<br>");
        }
        _response.end(); // _response wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map