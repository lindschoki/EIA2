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

    let candles: Products[] = [
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

        createBallSteppers();
        createLightStringSteppers();
        createCandleSteppers();
        createTreeRadioBoxes();
        createTreeTopRadioBoxes();
        //        createShoppingCart();
        //        createPersonalDatatFormular();

    }

    //    function Change(_event: Event): void {
    //        let input: HTMLInputElement = <HTMLInputElement>_event.target;
    //        let id: string[] = input.id.split
    //        if (this.id == "fieldsetRoteKugeln")
    //            console.log("Changed " + balls[1] + " for " + balls[2]);

    //    }




    function createBallSteppers(): void {

        for (let i: number = 0; i < balls.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            let fieldSetKugeln: HTMLElement = document.getElementById("fieldSetKugeln");
            let ballslabel: string = balls[i].name + " " + balls[i].price;
            fieldSetKugeln.appendChild(ballslabel);
            fieldSetKugeln.appendChild(input);
            fieldSetKugeln.appendChild(document.createElement("br"));
        }
    }

    
    function createLightStringSteppers(): void {

        for (let i: number = 0; i < lightstrings.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            let fieldSetLichterKetten: HTMLElement = document.getElementById("fieldsetLichterketten");
            let lightstringslabel: string = lightstrings[i].name + " " + lightstrings[i].price;
            fieldSetLichterKetten.appendChild(lightstringslabel);
            fieldSetLichterKetten.appendChild(input);
            fieldSetLichterKetten.appendChild(document.createElement("br"));
        }
    }

    
    function createCandleSteppers(): void {

        for (let i: number = 0; i < candles.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            let fieldSetKerzen: HTMLElement = document.getElementById("fieldsetKerzen");
            let candleslabel: string = candles[i].name + " " + candles[i].price;
            fieldSetKerzen.appendChild(candleslabel);
            fieldSetKerzen.appendChild(input);
            fieldSetKerzen.appendChild(document.createElement("br"));
        }
    }

    
    function createTreeRadioBoxes(): void {

        for (let i: number = 0; i < trees.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "Container";
            let fieldSetBaum: HTMLElement = document.getElementById("fieldsetBaum");
            let treeslabel: string = trees[i].name + " " + trees[i].price;
            fieldSetBaum.appendChild(treeslabel);
            fieldSetBaum.appendChild(input);
            fieldSetBaum.appendChild(document.createElement("br"));
        }
    }
    
    
    function createTreeTopRadioBoxes(): void {

        for (let i: number = 0; i < treetop.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "Container";
            let fieldSetBaumKrone: HTMLElement = document.getElementById("fieldsetBaumkrone");
            let treetoplabel: string = treetop[i].name + " " + treetop[i].price;
            fieldSetBaumKrone.appendChild(treetoplabel);
            fieldSetBaumKrone.appendChild(input);
            fieldSetBaumKrone.appendChild(document.createElement("br"));
        }
    }

}

//function createShoppingCart(): void {
//
//    let div: HTMLElement = document.createElement("div");
//    let shoppingcart: HTMLElement = document.getElementById("shoppingcart");
//    shoppingcart.appendChild(div);
//}
//
//
//function createPersonalDatatFormular(): void {
//
//    for (let x: number = 0; x < 7; x++) {
//        let selectionfields: HTMLElement = document.createElement("input");
//        let data: HTMLElement = document.getElementById("Data");
//        data.appendChild(selectionfields);
//
//        let s: CSSStyleDeclaration = selectionfields.style;
//        s.display = "block";
//        s.marginBottom = "20px";
//        s.marginTop = "10px";
//    }
//}



