/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace Weihnachtsbaumkonfigurator {

    window.addEventListener("load", init);

    function init(): void {

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", Change);
        }

        createBallSteppers();
        createLightStringSteppers();
        createCandleSteppers();
        createTreeRadioBoxes();
        createTreeTopRadioBoxes();
        createPersonalDatatFormular();
        createPostOptions();

    }

    let shoppingcart: Products[] = [];
    let chosenProduct: Products;

    function createBallSteppers(): void {

        for (let i: number = 0; i < balls.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            input.value = balls[i].name;
            input.id = balls[i].name;
            input.setAttribute("group", "balls");
            input.setAttribute("number", "" + i);
            let fieldSetKugeln: HTMLElement = document.getElementById("fieldsetKugeln");
            let ballslabel: HTMLLabelElement = document.createElement("label");
            fieldSetKugeln.appendChild(input);
            input.appendChild(ballslabel);
            fieldSetKugeln.appendChild(ballslabel);
            ballslabel.innerHTML = " " + balls[i].name + " " + balls[i].price + " Euro";
            ballslabel.appendChild(document.createElement("br"));
            //            ballslabel.appendChild(document.createElement("br"));
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
            input.value = lightstrings[i].name;
            input.id = lightstrings[i].name;
            input.setAttribute("group", "lightstrings");
            input.setAttribute("number", "" + i);
            let fieldSetLichterKetten: HTMLElement = document.getElementById("fieldsetLichterketten");
            let lightstringslabel: HTMLLabelElement = document.createElement("label");
            fieldSetLichterKetten.appendChild(input);
            input.appendChild(lightstringslabel);
            fieldSetLichterKetten.appendChild(lightstringslabel);
            lightstringslabel.innerHTML = " " + lightstrings[i].name + " " + lightstrings[i].price + " Euro";
            lightstringslabel.appendChild(document.createElement("br"));
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
            input.value = candles[i].name;
            input.id = candles[i].name;
            input.setAttribute("group", "candles");
            input.setAttribute("number", "" + i);
            let fieldSetKerzen: HTMLElement = document.getElementById("fieldsetKerzen");
            let candleslabel: HTMLLabelElement = document.createElement("label");
            fieldSetKerzen.appendChild(input);
            input.appendChild(candleslabel);
            fieldSetKerzen.appendChild(candleslabel);
            candleslabel.innerHTML = " " + candles[i].name + " " + candles[i].price + " Euro";
            candleslabel.appendChild(document.createElement("br"));
        }
    }

    function createTreeRadioBoxes(): void {

        for (let i: number = 0; i < trees.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "ContainerTrees";
            input.value = trees[i].name;
            input.id = trees[i].name;
            input.setAttribute("group", "trees");
            input.setAttribute("number", "" + i);
            let fieldSetBaum: HTMLElement = document.getElementById("fieldsetBaum");
            let treeslabel: HTMLLabelElement = document.createElement("label");
            fieldSetBaum.appendChild(input);
            input.appendChild(treeslabel);
            fieldSetBaum.appendChild(treeslabel);
            treeslabel.innerHTML = " " + trees[i].name + " " + trees[i].price + " Euro";
            treeslabel.appendChild(document.createElement("br"));
        }
    }


    function createTreeTopRadioBoxes(): void {

        for (let i: number = 0; i < treetop.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "ContainerTreeTop";
            input.value = treetop[i].name;
            input.id = treetop[i].name;
            input.setAttribute("group", "treetops");
            input.setAttribute("number", "" + i);
            let fieldSetBaumKrone: HTMLElement = document.getElementById("fieldsetBaumkrone");
            let treetoplabel: HTMLLabelElement = document.createElement("label");
            fieldSetBaumKrone.appendChild(input);
            input.appendChild(treetoplabel);
            fieldSetBaumKrone.appendChild(treetoplabel);
            treetoplabel.innerHTML = " " + treetop[i].name + " " + treetop[i].price + " Euro";
            treetoplabel.appendChild(document.createElement("br"));
        }
    }

    function createPostOptions(): void {

        for (let i: number = 0; i < post.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "ContainerPost";
            input.value = post[i].name;
            input.id = post[i].name;
            input.setAttribute("group", "post");
            input.setAttribute("number", "" + i);
            let fieldSetPost: HTMLElement = document.getElementById("fieldsetPost");
            let postlabel: HTMLLabelElement = document.createElement("label");
            fieldSetPost.appendChild(input);
            input.appendChild(postlabel);
            fieldSetPost.appendChild(postlabel);
            postlabel.innerHTML = " " + post[i].name + " " + post[i].price + " Euro";
            postlabel.appendChild(document.createElement("br"));
        }
    }


    function createPersonalDatatFormular(): void {

        let input: HTMLInputElement = document.createElement("input");
        input.setAttribute("group", "data");
        let data: HTMLElement = document.getElementById("Data");
        data.appendChild(input);
    }


    function Change(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let productgroup: string = target.getAttribute("group");
        let productnumber: number = parseInt(target.getAttribute("number"));
        let group: Products[];
        switch (productgroup) {

            case "balls": group = balls; break;

            case "lightstrings": group = lightstrings; break;

            case "candles": group = candles; break;

            case "trees": group = trees; break;

            case "treetops": group = treetop; break;

            case "post": group = post; break;

        }

        chosenProduct = group[productnumber];
        shoppingcart.push(chosenProduct);
        displayShoppingCart();

    }

    function displayShoppingCart(): void {
        let div: HTMLElement = document.createElement("div");

        for (let x: number = 0; x < shoppingcart.length; x++) {
            let shoppingcartfieldset: HTMLElement = document.getElementById("shoppingcart");
            shoppingcartfieldset.appendChild(div);
            div.innerHTML = shoppingcart[x].name + " " + shoppingcart[x].price + " Euro";

        }
    }

    function calcTotal(): void {


        if (shoppingcart.push) {
            let sum: number = 0;
            let price: number = shoppingcart.price;
            let total: HTMLElement = document.getElementById("Totalsum");
            total.appendChild(price);
            sum + price;
        }
    }



    console.log(shoppingcart);

}
