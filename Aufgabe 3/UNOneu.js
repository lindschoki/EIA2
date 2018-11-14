/**
Aufgabe: 3
Name: Arno Lindner
Matrikel: 259153
Datum: 11.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Uno1;
(function (Uno1) {
    document.addEventListener("DOMContentLoaded", content);
    document.addEventListener("keydown", pressSpaceBar);
    let deck = [
        { color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" },
        { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "Stop" },
        { color: "#ff0000", value: "Stop" }, { color: "#ff0000", value: "Swap" }, { color: "#ff0000", value: "Swap" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" },
        { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" },
        { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "Stop" }, { color: "#0000ff", value: "Stop" }, { color: "#0000ff", value: "Swap" }, { color: "#0000ff", value: "Swap" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" },
        { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "Stop" },
        { color: "#00ff00", value: "Stop" }, { color: "#00ff00", value: "Swap" }, { color: "#00ff00", value: "Swap" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" },
        { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" },
        { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "Stop" }, { color: "#ffff00", value: "Stop" }, { color: "#ffff00", value: "Swap" }, { color: "#ffff00", value: "Swap" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" },
        { color: "#black", value: "+4" }, { color: "#black", value: "+4" }, { color: "#black", value: "+4" }, { color: "#black", value: "+4" }, { color: "#black", value: "Colorchoice" }, { color: "#black", value: "Colorchoice" }, { color: "#black", value: "Colorchoice" }, { color: "#black", value: "Colorchoice" }];
    let handcards = [];
    let pilecards = [];
    function content() {
        let allCards;
        let cardselection = prompt("Gib deine Kartenanzahl ein");
        allCards = Number(cardselection);
        let button = document.getElementById("Sort");
        button.addEventListener("click", sortHandCards);
        let draw = document.getElementById("Deck");
        draw.addEventListener("click", drawNewCard);
        createCards(allCards);
    }
    function random() {
        return Math.floor(Math.random() * Math.floor(deck.length));
    }
    function createCards(_cards) {
        for (let i = 0; i < _cards; i++) {
            let index = random();
            let div = document.createElement("div");
            div.setAttribute("id", "" + i + "");
            div.innerText = deck[index].value;
            let hand = document.getElementById("Hand");
            hand.appendChild(div);
            let s = div.style;
            s.backgroundColor = deck[index].color;
            handcards.push(deck[index]);
            deck.splice(index, 1);
            div.addEventListener("click", playCard);
        }
        console.log(handcards);
        console.log(deck);
    }
    function displayHand() {
        document.getElementById("Hand").innerHTML = "";
        for (let x = 0; x < handcards.length; x++) {
            let div = document.createElement("div");
            div.setAttribute("id", "" + x + "");
            div.innerText = handcards[x].value;
            div.addEventListener("click", playCard);
            let hand = document.getElementById("Hand");
            hand.appendChild(div);
            let s = div.style;
            s.backgroundColor = handcards[x].color;
        }
    }
    function valuesToSort(a, b) {
        if (a.color > b.color) {
            return 1;
        }
        if (a.color < b.color) {
            return -1;
        }
    }
    function sortHandCards() {
        handcards.sort(valuesToSort);
        displayHand();
    }
    function playCard(_event) {
        let domCard = _event.target;
        let cardId = parseInt(domCard.id);
        pilecards.push(handcards[cardId]);
        let div = document.createElement("div");
        div.innerText = handcards[cardId].value;
        let ablage = document.getElementById("Pile");
        ablage.appendChild(div);
        let s = div.style;
        s.backgroundColor = handcards[cardId].color;
        handcards.splice(cardId, 1);
        displayHand();
    }
    function drawNewCard() {
        createCards(1);
    }
    function pressSpaceBar(_press) {
        if (_press.keyCode == 32)
            drawNewCard();
    }
})(Uno1 || (Uno1 = {}));
//# sourceMappingURL=UNOneu.js.map