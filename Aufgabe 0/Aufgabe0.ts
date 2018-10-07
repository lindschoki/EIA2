/**
Aufgabe: 0
Name: Arno Lindner
Matrikel: 259153
Datum: 06.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
    
function Feldeingabe() {
        var Name : string = prompt("Gib deinen Namen hier ein");
        var node = document.getElementById("htmlcontent");
        node.innerHTML += "Servus ";
        node.innerHTML += Name;
        node.innerHTML += " wie geht's?";
        console.log("Servus "+ Name + "wie geht's?");
    }
    document.addEventListener('DOMContentLoaded', Feldeingabe);
  