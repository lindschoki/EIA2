/**
Aufgabe: 2 neu
Name: Arno Lindner
Matrikel: 259153
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var UNO;
(function (UNO) {
    let alleKarten = [
        { color: "#ff0000", kartenwert: "0" }, { color: "#ff0000", kartenwert: "1" }, { color: "#ff0000", kartenwert: "1" }, { color: "#ff0000", kartenwert: "2" }, { color: "#ff0000", kartenwert: "2" }, { color: "#ff0000", kartenwert: "3" }, { color: "#ff0000", kartenwert: "3" }, { color: "#ff0000", kartenwert: "4" }, { color: "#ff0000", kartenwert: "4" }, { color: "#ff0000", kartenwert: "5" },
        { color: "#ff0000", kartenwert: "5" }, { color: "#ff0000", kartenwert: "6" }, { color: "#ff0000", kartenwert: "6" }, { color: "#ff0000", kartenwert: "7" }, { color: "#ff0000", kartenwert: "7" }, { color: "#ff0000", kartenwert: "8" }, { color: "#ff0000", kartenwert: "8" }, { color: "#ff0000", kartenwert: "9" }, { color: "#ff0000", kartenwert: "9" }, { color: "#ff0000", kartenwert: "Stop" },
        { color: "#ff0000", kartenwert: "Stop" }, { color: "#ff0000", kartenwert: "Swap" }, { color: "#ff0000", kartenwert: "Swap" }, { color: "#ff0000", kartenwert: "+2" }, { color: "#ff0000", kartenwert: "+2" }, { color: "#0000ff", kartenwert: "0" }, { color: "#0000ff", kartenwert: "1" }, { color: "#0000ff", kartenwert: "1" }, { color: "#0000ff", kartenwert: "2" }, { color: "#0000ff", kartenwert: "2" },
        { color: "#0000ff", kartenwert: "3" }, { color: "#0000ff", kartenwert: "3" }, { color: "#0000ff", kartenwert: "4" }, { color: "#0000ff", kartenwert: "4" }, { color: "#0000ff", kartenwert: "5" }, { color: "#0000ff", kartenwert: "5" }, { color: "#0000ff", kartenwert: "6" }, { color: "#0000ff", kartenwert: "6" }, { color: "#0000ff", kartenwert: "7" }, { color: "#0000ff", kartenwert: "7" },
        { color: "#0000ff", kartenwert: "8" }, { color: "#0000ff", kartenwert: "8" }, { color: "#0000ff", kartenwert: "9" }, { color: "#0000ff", kartenwert: "9" }, { color: "#0000ff", kartenwert: "Stop" }, { color: "#0000ff", kartenwert: "Stop" }, { color: "#0000ff", kartenwert: "Swap" }, { color: "#0000ff", kartenwert: "Swap" }, { color: "#0000ff", kartenwert: "+2" }, { color: "#0000ff", kartenwert: "+2" },
        { color: "#00ff00", kartenwert: "0" }, { color: "#00ff00", kartenwert: "1" }, { color: "#00ff00", kartenwert: "1" }, { color: "#00ff00", kartenwert: "2" }, { color: "#00ff00", kartenwert: "2" }, { color: "#00ff00", kartenwert: "3" }, { color: "#00ff00", kartenwert: "3" }, { color: "#00ff00", kartenwert: "4" }, { color: "#00ff00", kartenwert: "4" }, { color: "#00ff00", kartenwert: "5" },
        { color: "#00ff00", kartenwert: "5" }, { color: "#00ff00", kartenwert: "6" }, { color: "#00ff00", kartenwert: "6" }, { color: "#00ff00", kartenwert: "7" }, { color: "#00ff00", kartenwert: "7" }, { color: "#00ff00", kartenwert: "8" }, { color: "#00ff00", kartenwert: "8" }, { color: "#00ff00", kartenwert: "9" }, { color: "#00ff00", kartenwert: "9" }, { color: "#00ff00", kartenwert: "Stop" },
        { color: "#00ff00", kartenwert: "Stop" }, { color: "#00ff00", kartenwert: "Swap" }, { color: "#00ff00", kartenwert: "Swap" }, { color: "#00ff00", kartenwert: "+2" }, { color: "#00ff00", kartenwert: "+2" },
        { color: "#ffff00", kartenwert: "0" }, { color: "#ffff00", kartenwert: "1" }, { color: "#ffff00", kartenwert: "1" }, { color: "#ffff00", kartenwert: "2" }, { color: "#ffff00", kartenwert: "2" }, { color: "#ffff00", kartenwert: "3" }, { color: "#ffff00", kartenwert: "3" }, { color: "#ffff00", kartenwert: "4" }, { color: "#ffff00", kartenwert: "4" }, { color: "#ffff00", kartenwert: "5" },
        { color: "#ffff00", kartenwert: "5" }, { color: "#ffff00", kartenwert: "6" }, { color: "#ffff00", kartenwert: "6" }, { color: "#ffff00", kartenwert: "7" }, { color: "#ffff00", kartenwert: "7" }, { color: "#ffff00", kartenwert: "8" }, { color: "#ffff00", kartenwert: "8" }, { color: "#ffff00", kartenwert: "9" }, { color: "#ffff00", kartenwert: "9" }, { color: "#ffff00", kartenwert: "Stop" },
        { color: "#ffff00", kartenwert: "Stop" }, { color: "#ffff00", kartenwert: "Swap" }, { color: "#ffff00", kartenwert: "Swap" }, { color: "#ffff00", kartenwert: "+2" }, { color: "#ffff00", kartenwert: "+2" },
        { color: "#black", kartenwert: "+4" }, { color: "#black", kartenwert: "+4" }, { color: "#black", kartenwert: "+4" }, { color: "#black", kartenwert: "+4" }];
    function content() {
        function random(_n) {
            return Math.floor(Math.random() * Math.floor(_n));
        }
        function createCard(card) {
            let div = document.createElement("div");
            div.setAttribute("class", "Einzelkarten");
            div.innerText = alleKarten[card].kartenwert;
            let hand = document.getElementById("Hand");
            hand.appendChild(div);
            let s = div.style;
            s.backgroundColor = alleKarten[card].color;
        }
        let gesamtKarten = (alleKarten.length);
        let kartenWahl = prompt("Gib deine Kartenanzahl ein");
        gesamtKarten = Number(kartenWahl);
        for (let i = 0; i < gesamtKarten; i++) {
            let gesamtKarten = random(alleKarten.length);
            createCard(gesamtKarten);
        }
        function ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            document.getElementById("Ablage").innerHTML += "Ablage";
        }
        function deck() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            document.getElementById("Stapel").innerHTML += "Deck";
        }
        ablage();
        deck();
    }
    document.addEventListener("DOMContentLoaded", content);
})(UNO || (UNO = {}));
//# sourceMappingURL=UNOneu.js.map