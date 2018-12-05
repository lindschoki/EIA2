/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe5v;
(function (Aufgabe5v) {
    window.addEventListener("load", init);
    //let address: string = "https://eia-2-aufgabe-6.herokuapp.com";
    function init(_event) {
        createFieldset(Aufgabe5v.data);
        handleChange(_event);
    }
    function createFieldset(_product) {
        for (let key in _product) {
            let fieldset = document.createElement("fieldset");
            fieldset.setAttribute("id", key);
            let legend = document.createElement("legend");
            legend.innerText = key;
            fieldset.appendChild(legend);
            document.body.appendChild(fieldset);
            let value = _product[key];
            for (let i = 0; i < value.length; i++) {
                let input = document.createElement("input");
                input.type = "number";
                input.min = "0";
                input.max = "30";
                input.step = "1";
                input.value = "0";
                input.setAttribute("id", value[i].name);
                input.setAttribute("group", key);
                input.setAttribute("name", value[i].name);
                input.setAttribute("price", value[i].price.toString() + " Euro");
                input.setAttribute("value", "0");
                input.addEventListener("change", handleChange);
                let label = document.createElement("label");
                label.innerHTML = " " + value[i].name + " " + value[i].price + " Euro";
                input.appendChild(label);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                fieldset.appendChild(document.createElement("br"));
                fieldset.appendChild(document.createElement("br"));
                if (key == "Baumart" || key == "Baumspitzen" || key == "Post-Weg") {
                    input.type = "radio";
                    input.required = true;
                    input.name = key;
                    input.setAttribute("id", value[i].name);
                    input.setAttribute("group", key);
                    input.setAttribute("price", value[i].price.toString() + " Euro");
                    input.setAttribute("value", "0");
                    input.addEventListener("change", handleChange);
                }
            }
        }
    }
    function handleChange(_event) {
        let inputs = document.getElementsByTagName("input");
        let cart = document.getElementById("Cart");
        cart.innerHTML = "";
        for (let i = 0; i < inputs.length; i++) {
            let product = inputs[i];
            if (product.type == "number") {
                let productname = product.getAttribute("name");
                let productprice = parseFloat(product.getAttribute("price"));
                let amountString = product.value;
                let amount = parseInt(product.value);
                if (amount == 0) {
                }
                else if (amount == 1) {
                    cart.innerHTML += productname + " " + productprice + " Euro" + "<br>";
                }
                else {
                    cart.innerHTML += amountString + "X " + productname + " " + productprice + " Euro" + "<br>";
                }
            }
            if (product.type == "radio") {
                let productname = product.getAttribute("id");
                let productprice = parseFloat(product.getAttribute("price"));
                if (product.checked == true) {
                    cart.innerHTML += productname + " " + productprice + " Euro";
                }
                else if (product.checked == false) {
                }
            }
        }
    }
    function calcPrice() {
    }
})(Aufgabe5v || (Aufgabe5v = {}));
//# sourceMappingURL=Aufgabe5.js.map