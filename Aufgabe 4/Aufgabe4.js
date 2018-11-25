/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    window.addEventListener("load", init);
    function init() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
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
    let shoppingcart = [];
    let chosenProduct;
    function createBallSteppers() {
        for (let i = 0; i < Weihnachtsbaumkonfigurator.balls.length; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            input.value = Weihnachtsbaumkonfigurator.balls[i].name;
            input.id = Weihnachtsbaumkonfigurator.balls[i].name;
            input.setAttribute("group", "balls");
            input.setAttribute("number", "" + i);
            let fieldSetKugeln = document.getElementById("fieldsetKugeln");
            let ballslabel = document.createElement("label");
            fieldSetKugeln.appendChild(input);
            input.appendChild(ballslabel);
            fieldSetKugeln.appendChild(ballslabel);
            ballslabel.innerHTML = " " + Weihnachtsbaumkonfigurator.balls[i].name + " " + Weihnachtsbaumkonfigurator.balls[i].price + " Euro";
            ballslabel.appendChild(document.createElement("br"));
        }
    }
    function createLightStringSteppers() {
        for (let i = 0; i < Weihnachtsbaumkonfigurator.lightstrings.length; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            input.value = Weihnachtsbaumkonfigurator.lightstrings[i].name;
            input.id = Weihnachtsbaumkonfigurator.lightstrings[i].name;
            input.setAttribute("group", "lightstrings");
            input.setAttribute("number", "" + i);
            let fieldSetLichterKetten = document.getElementById("fieldsetLichterketten");
            let lightstringslabel = document.createElement("label");
            fieldSetLichterKetten.appendChild(input);
            input.appendChild(lightstringslabel);
            fieldSetLichterKetten.appendChild(lightstringslabel);
            lightstringslabel.innerHTML = " " + Weihnachtsbaumkonfigurator.lightstrings[i].name + " " + Weihnachtsbaumkonfigurator.lightstrings[i].price + " Euro";
            lightstringslabel.appendChild(document.createElement("br"));
        }
    }
    function createCandleSteppers() {
        for (let i = 0; i < Weihnachtsbaumkonfigurator.candles.length; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.max = "30";
            input.step = "1";
            input.value = "0";
            input.value = Weihnachtsbaumkonfigurator.candles[i].name;
            input.id = Weihnachtsbaumkonfigurator.candles[i].name;
            input.setAttribute("group", "candles");
            input.setAttribute("number", "" + i);
            let fieldSetKerzen = document.getElementById("fieldsetKerzen");
            let candleslabel = document.createElement("label");
            fieldSetKerzen.appendChild(input);
            input.appendChild(candleslabel);
            fieldSetKerzen.appendChild(candleslabel);
            candleslabel.innerHTML = " " + Weihnachtsbaumkonfigurator.candles[i].name + " " + Weihnachtsbaumkonfigurator.candles[i].price + " Euro";
            candleslabel.appendChild(document.createElement("br"));
        }
    }
    function createTreeRadioBoxes() {
        for (let i = 0; i < Weihnachtsbaumkonfigurator.trees.length; i++) {
            let input = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "ContainerTrees";
            input.value = Weihnachtsbaumkonfigurator.trees[i].name;
            input.id = Weihnachtsbaumkonfigurator.trees[i].name;
            input.setAttribute("group", "trees");
            input.setAttribute("number", "" + i);
            let fieldSetBaum = document.getElementById("fieldsetBaum");
            let treeslabel = document.createElement("label");
            fieldSetBaum.appendChild(input);
            input.appendChild(treeslabel);
            fieldSetBaum.appendChild(treeslabel);
            treeslabel.innerHTML = " " + Weihnachtsbaumkonfigurator.trees[i].name + " " + Weihnachtsbaumkonfigurator.trees[i].price + " Euro";
            treeslabel.appendChild(document.createElement("br"));
        }
    }
    function createTreeTopRadioBoxes() {
        for (let i = 0; i < Weihnachtsbaumkonfigurator.treetop.length; i++) {
            let input = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "ContainerTreeTop";
            input.value = Weihnachtsbaumkonfigurator.treetop[i].name;
            input.id = Weihnachtsbaumkonfigurator.treetop[i].name;
            input.setAttribute("group", "treetops");
            input.setAttribute("number", "" + i);
            let fieldSetBaumKrone = document.getElementById("fieldsetBaumkrone");
            let treetoplabel = document.createElement("label");
            fieldSetBaumKrone.appendChild(input);
            input.appendChild(treetoplabel);
            fieldSetBaumKrone.appendChild(treetoplabel);
            treetoplabel.innerHTML = " " + Weihnachtsbaumkonfigurator.treetop[i].name + " " + Weihnachtsbaumkonfigurator.treetop[i].price + " Euro";
            treetoplabel.appendChild(document.createElement("br"));
        }
    }
    function createPostOptions() {
        for (let i = 0; i < Weihnachtsbaumkonfigurator.post.length; i++) {
            let input = document.createElement("input");
            input.type = "radio";
            input.required = true;
            input.name = "ContainerPost";
            input.value = Weihnachtsbaumkonfigurator.post[i].name;
            input.id = Weihnachtsbaumkonfigurator.post[i].name;
            input.setAttribute("group", "post");
            input.setAttribute("number", "" + i);
            let fieldSetPost = document.getElementById("fieldsetPost");
            let postlabel = document.createElement("label");
            fieldSetPost.appendChild(input);
            input.appendChild(postlabel);
            fieldSetPost.appendChild(postlabel);
            postlabel.innerHTML = " " + Weihnachtsbaumkonfigurator.post[i].name + " " + Weihnachtsbaumkonfigurator.post[i].price + " Euro";
            postlabel.appendChild(document.createElement("br"));
        }
    }
    function createPersonalDatatFormular() {
        let input = document.createElement("input");
        input.setAttribute("group", "data");
        let data = document.getElementById("Data");
        data.appendChild(input);
    }
    function Change(_event) {
        let target = _event.target;
        let productgroup = target.getAttribute("group");
        let productnumber = parseInt(target.getAttribute("number"));
        let group;
        switch (productgroup) {
            case "balls":
                group = Weihnachtsbaumkonfigurator.balls;
                break;
            case "lightstrings":
                group = Weihnachtsbaumkonfigurator.lightstrings;
                break;
            case "candles":
                group = Weihnachtsbaumkonfigurator.candles;
                break;
            case "trees":
                group = Weihnachtsbaumkonfigurator.trees;
                break;
            case "treetops":
                group = Weihnachtsbaumkonfigurator.treetop;
                break;
            case "post":
                group = Weihnachtsbaumkonfigurator.post;
                break;
        }
        chosenProduct = group[productnumber];
        shoppingcart.push(chosenProduct);
        displayShoppingCart();
    }
    function displayShoppingCart() {
        let shoppingcartfieldset = document.getElementById("shoppingcart");
        let div = document.createElement("div");
        for (let x = 0; x < shoppingcart.length; x++) {
            shoppingcartfieldset.appendChild(div);
            div.innerHTML = shoppingcart[x].name + " " + shoppingcart[x].price + " Euro";
            if (Change) {
                shoppingcart.splice(parseInt("change"));
                //div.innerHTML = "";
                displayShoppingCart();
            }
        }
        //    function calcTotal(): void {
        //
        //
        //        if (shoppingcart.push) {
        //            let sum: number = 0;
        //            let price: number = shoppingcart.price;
        //            let total: HTMLElement = document.getElementById("Total");
        //            total.appendChild(price);
        //            sum + price;
        //        }
        //    }
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Aufgabe4.js.map