/**
Aufgabe: 0
Name: Arno Lindner
Matrikel: 259153
Datum: 07.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
    
function Feldeingabe(): void {
        var NAME: string = prompt("Gib deinen Namen hier ein");
        var node: HTMLElement = document.getElementById("innerhtmlcontent");
        node.innerHTML += "Servus ";
        node.innerHTML += NAME;
        node.innerHTML += " wie geht's?";
        console.log("Servus " + NAME + "wie geht's?");
    }
    document.addEventListener("DOMContentLoaded", Feldeingabe);
  