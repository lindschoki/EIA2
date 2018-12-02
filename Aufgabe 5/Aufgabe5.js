/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    function init(_event) {
        createFieldset(Aufgabe5.data);
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
                    input.setAttribute("name", value[i].name);
                    input.setAttribute("price", value[i].price.toString() + " Euro");
                    input.setAttribute("value", "0");
                    input.addEventListener("change", handleChange);
                }
            }
        }
    }
    function handleChange(_event) {
        let inputs = document.getElementsByTagName("input");
        let target = _event.target;
        let cart = document.getElementById("Cart");
        for (let i = 0; i < inputs.length; i++) {
            let product = inputs[i];
            if (product.type == "radio") {
                if (product.checked == true) {
                    let productname = target.getAttribute("name");
                    let productprice = parseFloat(target.getAttribute("price"));
                    cart.innerHTML = productname + " " + productprice + " Euro";
                }
            }
            if (product.type == "number") {
                let productname = target.getAttribute("name");
                let productprice = parseFloat(target.getAttribute("price"));
                let amount = target.value;
                cart.innerHTML = amount + "X " + productname + " " + productprice + " Euro";
            }
            let amount = parseInt(target.value);
            if (amount > 1) {
                displayCart(_event);
            }
        }
    }
    function displayCart(_event) {
        let inputs = document.getElementsByTagName("input");
        let target = _event.target;
        let newcart = document.getElementById("Cart");
        let div = document.createElement("div");
        newcart.appendChild(div);
        div.innerHTML = "";
        for (let x = 0; x < inputs.length; x++) {
            let product = inputs[x];
            if (product.type == "number") {
                let productname = target.getAttribute("name");
                let productprice = parseFloat(target.getAttribute("price"));
                let amount = target.value;
                div.innerHTML = amount + "X " + productname + " " + productprice + " Euro";
            }
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map