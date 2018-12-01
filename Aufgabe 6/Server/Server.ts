import * as Http from "http"; //ts-Datei wird importiert als Http von "http"

namespace L06_SendData { // ein namespace / Aufgabenabgrenzung wird festgelegt          
    console.log("Starting server"); // Konsole gibt "Starting server" aus 
    let port: number = process.env.PORT; // Variable port wird mit dem typ nummer deklariert und hat den einen wert vom Heroku-Server
    if (port == undefined) // if Abfrage, wenn port variable undefiniert ist
        port = 8100; // port variable wird der wert 8100 gegeben 

    let server: Http.Server = Http.createServer(); // variable server wird vom typ Http.Server deklariert udn mit ihr wird ein Server kreiert ? (nicht sicher)
    server.addListener("request", handleRequest); // server Variable erhält einen Listener der auf ein "request" hört und dann die Funktion HandleRequest ausführt
    server.addListener("listening", handleListen); // server erhält einen weiteren Listener ("listening"?) / in dem Fall wird Funktion handleListen ausgeführt
    server.listen(port); // server soll auf port variable hören

    function handleListen(): void { // funktion handleListen() vom typ void wird deklariert
        console.log("Listening"); // Konsole gibt "Listening" aus
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // funktion handleRequest bekommt die Parameter _request vom typ Http.IncomingMessage und den Parameter _response vom typ Http.ServerResponse
        console.log("I hear voices!"); // Konsole gibt "I hear voices!" aus
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8"); // Parameter _response fügt in den Header "content-type", "text/html; charset=utf-8" hinzu
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Parameter _response fügt in den Header "Access-Control-Allow-Origin", "*" ein (das js datei und der Server kompatibel sind, Server auf den Code zugreifen kann, weiß leider nicht genau was das macht)

        _response.write(_request.url); // _response.write greift auf _request.url zu 
        
        _response.end(); // _response wird beendet
    }
}