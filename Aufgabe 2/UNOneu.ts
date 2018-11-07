/**
Aufgabe: 2 neu
Name: Arno Lindner
Matrikel: 259153
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace UNO {

    interface UNOKarten {
        color: string;
        kartenwert: string;
    }


    let alleKarten: UNOKarten[] = [
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



    function random(): number {
        return Math.floor(Math.random() * Math.floor(alleKarten.length));
    }


    function createCard(card: number): void {

        for (let i: number = 0; i < card; i++) {
            let index: number = random();
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "Einzelkarten");
            div.innerText = alleKarten[index].kartenwert;
            let hand: HTMLElement = document.getElementById("Hand");
            hand.appendChild(div);

            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = alleKarten[index].color;
        }
    }


    function ablage(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        document.getElementById("Ablage").innerHTML += "Ablage";
    }


    function deck(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        document.getElementById("Stapel").innerHTML += "Deck";
    }

    function content(): void {
        let gesamtKarten: number = (alleKarten.length);
        let kartenWahl: string = prompt("Gib deine Kartenanzahl ein");
        gesamtKarten = Number(kartenWahl);

        createCard(gesamtKarten);

        ablage();
        deck();
    }


    document.addEventListener("DOMContentLoaded", content);

}