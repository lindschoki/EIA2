/**
Aufgabe: 2 neu
Name: Arno Lindner
Matrikel: 259153
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace Uno {

    document.addEventListener("DOMContentLoaded", content);

    interface Card {
        color: string;
        value: string;
    }

    let deck: Card[] = [
        { color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" },
        { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "Stop" },
        { color: "#ff0000", value: "Stop" }, { color: "#ff0000", value: "Swap" }, { color: "#ff0000", value: "Swap" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" },
        { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" },
        { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "Stop" }, { color: "#0000ff", value: "Stop" }, { color: "#0000ff", value: "Swap" }, { color: "#0000ff", value: "Swap" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" },
        { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "Stop" },
        { color: "#00ff00", value: "Stop" }, { color: "#00ff00", value: "Swap" }, { color: "#00ff00", value: "Swap" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" },
        { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "Stop" },
        { color: "#ffff00", value: "Stop" }, { color: "#ffff00", value: "Swap" }, { color: "#ffff00", value: "Swap" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" },
        { color: "#black", value: "+4" }, { color: "#black", value: "+4" }, { color: "#black", value: "+4" }, { color: "#black", value: "+4" }];


    function random(): number {
        return Math.floor(Math.random() * Math.floor(deck.length));
    }


    function createCards(_cards: number): void {

        for (let i: number = 0; i < _cards; i++) {
            let index: number = random();
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "Einzelkarten");
            div.innerText = deck[index].value;
            let hand: HTMLElement = document.getElementById("Hand");
            hand.appendChild(div);

            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = deck[index].color;
        }
    }


    function content(): void {
        let allCards: number = (deck.length);
        let cardselection: string = prompt("Gib deine Kartenanzahl ein");
        allCards = Number(cardselection);

        createCards(allCards);
    }
}