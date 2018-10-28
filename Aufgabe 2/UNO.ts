namespace UNO {

    //Ich weis leider nicht wie ich es hinbekomme, dass sich die Karten nebeneinander aufbauen//


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


    function content(): void {


        function random(_n: number): number {
            return Math.floor(Math.random() * Math.floor(_n));
        }


        function createCard(card: number): void {
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "Einzelkarten");
            let hand: HTMLElement = document.getElementById("Hand");
            hand.appendChild(div);
           

            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = alleKarten[card].color;
            s.content = alleKarten[card].kartenwert;
        }


        let gesamtKarten: number = (alleKarten.length);
        let kartenWahl: string = prompt("Gib deine Kartenanzahl ein");
        gesamtKarten = Number(kartenWahl);

        for (let i: number = 0; i < gesamtKarten; i++) {
            let gesamtKarten: number = random(alleKarten.length);
            createCard(gesamtKarten);
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


        ablage();
        deck();
    }


    document.addEventListener("DOMContentLoaded", content);

}