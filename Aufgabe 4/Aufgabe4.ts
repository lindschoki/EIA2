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

/**‹ber 10 Stunden am coden**/

namespace Weihnachtsbaumkonfigurator {

    window.addEventListener("load", init);

    interface Products {
        name: string;
        price: number;
    }

    let trees: Products[] = [
        { name: "Blaufichte", price: 35 }, { name: "Fichte", price: 30 }, { name: "Rotfichte", price: 32 }, { name: "Edeltanne", price: 45 }, { name: "Kiefer", price: 40 }];

    let balls: Products[] = [
        { name: "Rote Kugeln", price: 1.50 }, { name: "Goldene Kugeln", price: 1.60 }, { name: "Weiﬂe Kugeln", price: 1.00 }];

    let lightstrings: Products[] = [
        { name: "5 Meter Lichterkette", price: 12 }, { name: "3 Meter Lichterkette", price: 15 }, { name: "10 Meter Lichterkette", price: 20 }];

    let candels: Products[] = [
        { name: "Rote Kerzen", price: 2 }, { name: "Weiﬂe Kerzen", price: 1.50 }, { name: "Rot-Weiﬂ gestreifte Kerzen", price: 2.50 }];

    let treetop: Products[] = [
        { name: "Engel", price: 10 }, { name: "Stern", price: 12 }];

    let shoppingcart: Products[] = [];



    function init(_event: Event): void {

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

    function createStepper(): Node {
        let input: HTMLInputElement = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "30";
        input.step = "1";
        input.value = "0";
        return input;
    }


    function createBallSteppers(): void {

        let ballStepperRed: Node = createStepper();
        let red: HTMLElement = document.getElementById("fieldsetRoteKugeln");
        red.appendChild(ballStepperRed);

        
        let ballStepperWhite: Node = createStepper();
        let white: HTMLElement = document.getElementById("fieldsetWeiseKugeln");
        white.appendChild(ballStepperWhite);


        let ballStepperGold: Node = createStepper();
        let gold: HTMLElement = document.getElementById("fieldsetGoldeneKugeln");
        gold.appendChild(ballStepperGold);

        //            for (let i: number = 0; i < n; i++) {
        //                let kugelstepper: Node = createInput();
        //                let stepperKugeln: HTMLElement = document.getElementById("fieldKugeln");
        //                stepperKugeln.appendChild(kugelstepper);
        //            }
    }


    function createLightstringSteppers(): void {

        let shortLightstring: Node = createStepper();
        let lightstring1: HTMLElement = document.getElementById("3Meter");
        lightstring1.appendChild(shortLightstring);

        let middleLightstring: Node = createStepper();
        let lightstring2: HTMLElement = document.getElementById("5Meter");
        lightstring2.appendChild(middleLightstring);

        let longLightstring: Node = createStepper();
        let lightstring3: HTMLElement = document.getElementById("10Meter");
        lightstring3.appendChild(longLightstring);
    }


    function createThirdStepper(): void {

        let redCandel: Node = createStepper();
        let candel1: HTMLElement = document.getElementById("kerzerot");
        candel1.appendChild(redCandel);

        let whiteCandel: Node = createStepper();
        let candel2: HTMLElement = document.getElementById("kerzeweis");
        candel2.appendChild(whiteCandel);

        let redWhiteCandel: Node = createStepper();
        let candel3: HTMLElement = document.getElementById("kerzeweisrot");
        candel3.appendChild(redWhiteCandel);
    }


    function createRadioBoxes(): Node {
        let input: HTMLInputElement = document.createElement("input");
        input.type = "radio";
        input.required = true;
        input.name = "Container";
        return input;
    }


    function createTreeRadioBoxes(): void {

        let blaufichte: Node = createRadioBoxes();
        let firstTree: HTMLElement = document.getElementById("Baum1");
        firstTree.appendChild(blaufichte);

        let fichte: Node = createRadioBoxes();
        let secondTree: HTMLElement = document.getElementById("Baum2");
        secondTree.appendChild(fichte);

        let rotfichte: Node = createRadioBoxes();
        let thirdTree: HTMLElement = document.getElementById("Baum3");
        thirdTree.appendChild(rotfichte);

        let edeltanne: Node = createRadioBoxes();
        let fourthTree: HTMLElement = document.getElementById("Baum4");
        fourthTree.appendChild(edeltanne);

        let kiefer: Node = createRadioBoxes();
        let fifthTree: HTMLElement = document.getElementById("Baum5");
        fifthTree.appendChild(kiefer);
    }


    function createTreeTopRadioBoxes(): void {

        let star: Node = createRadioBoxes();
        let firstOption: HTMLElement = document.getElementById("Option1");
        firstOption.appendChild(star);

        let angel: Node = createRadioBoxes();
        let secondOption: HTMLElement = document.getElementById("Option2");
        secondOption.appendChild(angel);
    }


    function createShoppingCart(): void {

        let div: HTMLElement = document.createElement("div");
        let shoppingcart: HTMLElement = document.getElementById("shoppingcart");
        shoppingcart.appendChild(div);
    }


    function createPersonalDatatFormular(): void {

        for (let x: number = 0; x < 7; x++) {
            let selectionfields: HTMLElement = document.createElement("input");
            let data: HTMLElement = document.getElementById("Data");
            data.appendChild(selectionfields);

            let s: CSSStyleDeclaration = selectionfields.style;
            s.display = "block";
            s.marginBottom = "20px";
            s.marginTop = "10px";
        }
    }

}


