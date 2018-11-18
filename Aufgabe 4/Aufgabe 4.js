/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
/** Leider habe ich Probleme den Inhalt meiner arrys mit meinen entsprechenden fieldsets zu verbinden und auch die Parameter machen Probleme, da mein interface ein string
und eine number besitzt: bei der consolen ausgeb kann nicht unterschieden werden (Ausgabe object object) weis nicht ob hier eine Vergleichsfunktion hilft,
habe es auf jeden Fall versucht, es kam dabei aber nichts raus.**/
/**�ber 10 Stunden am coden**/
var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    window.addEventListener("load", init);
    let trees = [
        { name: "Blaufichte", price: 35 }, { name: "Fichte", price: 30 }, { name: "Rotfichte", price: 32 }, { name: "Edeltanne", price: 45 }, { name: "Kiefer", price: 40 }];
    let balls = [
        { name: "Rote Kugeln", price: 1.50 }, { name: "Goldene Kugeln", price: 1.60 }, { name: "Wei�e Kugeln", price: 1.00 }];
    let lightstrings = [
        { name: "5 Meter Lichterkette", price: 12 }, { name: "3 Meter Lichterkette", price: 15 }, { name: "10 Meter Lichterkette", price: 20 }];
    let candels = [
        { name: "Rote Kerzen", price: 2 }, { name: "Wei�e Kerzen", price: 1.50 }, { name: "Rot-Wei� gestreifte Kerzen", price: 2.50 }];
    let treetop = [
        { name: "Engel", price: 10 }, { name: "Stern", price: 12 }];
    let shoppingcart = [];
    function init(_event) {
        //        let fieldsets: NodeListOf<HTMLFieldSetElement> =
        //            document.getElementsByTagName("fieldset");
        //
        //        for (let i: number = 0; i < fieldsets.length; i++) {
        //            let fieldset: HTMLFieldSetElement = fieldsets[i];
        //            fieldset.addEventListener("change", Change);
        //       }
        createStepper();
        createBallSteppers();
        createLightstringSteppers();
        createThirdStepper();
        createTreeRadioBoxes();
        createTreeTopRadioBoxes();
        createShoppingCart();
        createPersonalDatatFormular();
    }
    //    function Change(_event: Event): void {
    //        let input: HTMLInputElement = <HTMLInputElement>_event.target;
    //        let id: string[] = input.id.split
    //        if (this.id == "fieldsetRoteKugeln")
    //            console.log("Changed " + balls[1] + " for " + balls[2]);
    //    }
    function createStepper() {
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "30";
        input.step = "1";
        input.value = "0";
        return input;
    }
    function createBallSteppers() {
        let ballStepperRed = createStepper();
        let red = document.getElementById("fieldsetRoteKugeln");
        red.appendChild(ballStepperRed);
        let ballStepperWhite = createStepper();
        let white = document.getElementById("fieldsetWeiseKugeln");
        white.appendChild(ballStepperWhite);
        let ballStepperGold = createStepper();
        let gold = document.getElementById("fieldsetGoldeneKugeln");
        gold.appendChild(ballStepperGold);
        //            for (let i: number = 0; i < n; i++) {
        //                let kugelstepper: Node = createInput();
        //                let stepperKugeln: HTMLElement = document.getElementById("fieldKugeln");
        //                stepperKugeln.appendChild(kugelstepper);
        //            }
    }
    function createLightstringSteppers() {
        let shortLightstring = createStepper();
        let lightstring1 = document.getElementById("3Meter");
        lightstring1.appendChild(shortLightstring);
        let middleLightstring = createStepper();
        let lightstring2 = document.getElementById("5Meter");
        lightstring2.appendChild(middleLightstring);
        let longLightstring = createStepper();
        let lightstring3 = document.getElementById("10Meter");
        lightstring3.appendChild(longLightstring);
    }
    function createThirdStepper() {
        let redCandel = createStepper();
        let candel1 = document.getElementById("kerzerot");
        candel1.appendChild(redCandel);
        let whiteCandel = createStepper();
        let candel2 = document.getElementById("kerzeweis");
        candel2.appendChild(whiteCandel);
        let redWhiteCandel = createStepper();
        let candel3 = document.getElementById("kerzeweisrot");
        candel3.appendChild(redWhiteCandel);
    }
    function createRadioBoxes() {
        let input = document.createElement("input");
        input.type = "radio";
        input.required = true;
        input.name = "Container";
        return input;
    }
    function createTreeRadioBoxes() {
        let blaufichte = createRadioBoxes();
        let firstTree = document.getElementById("Baum1");
        firstTree.appendChild(blaufichte);
        let fichte = createRadioBoxes();
        let secondTree = document.getElementById("Baum2");
        secondTree.appendChild(fichte);
        let rotfichte = createRadioBoxes();
        let thirdTree = document.getElementById("Baum3");
        thirdTree.appendChild(rotfichte);
        let edeltanne = createRadioBoxes();
        let fourthTree = document.getElementById("Baum4");
        fourthTree.appendChild(edeltanne);
        let kiefer = createRadioBoxes();
        let fifthTree = document.getElementById("Baum5");
        fifthTree.appendChild(kiefer);
    }
    function createTreeTopRadioBoxes() {
        let star = createRadioBoxes();
        let firstOption = document.getElementById("Option1");
        firstOption.appendChild(star);
        let angel = createRadioBoxes();
        let secondOption = document.getElementById("Option2");
        secondOption.appendChild(angel);
    }
    function createShoppingCart() {
        let div = document.createElement("div");
        let shoppingcart = document.getElementById("shoppingcart");
        shoppingcart.appendChild(div);
    }
    function createPersonalDatatFormular() {
        for (let x = 0; x < 7; x++) {
            let selectionfields = document.createElement("input");
            let data = document.getElementById("Data");
            data.appendChild(selectionfields);
            let s = selectionfields.style;
            s.display = "block";
            s.marginBottom = "20px";
            s.marginTop = "10px";
        }
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Aufgabe 4.js.map