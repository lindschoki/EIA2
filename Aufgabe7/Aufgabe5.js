/**
Aufgabe: 7
Name: Arno Lindner
Matrikel: 259153
Datum: 09.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe7;
(function (Aufgabe7) {
    window.addEventListener("load", init);
    function init(_event) {
        createFieldset(Aufgabe7.data);
        handleChange(_event);
        setupAsyncForm();
    }
    let address = "https://lindschoki-eia-2.herokuapp.com/";
    function createFieldset(_product) {
        for (let key in _product) {
            let fieldset = document.createElement("fieldset");
            let div = document.getElementById("exportelements");
            fieldset.setAttribute("id", key);
            let legend = document.createElement("legend");
            legend.innerText = key;
            fieldset.appendChild(legend);
            div.appendChild(fieldset);
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
                    input.setAttribute("name", key);
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
                    cart.innerHTML += productname + " " + productprice + " Euro" + "<br>";
                }
                else if (product.checked == false) {
                }
            }
        }
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        let inputs = document.getElementsByTagName("input");
        let alertInput = [];
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let productname1 = input.getAttribute("id");
            let productprice1 = parseFloat(input.getAttribute("price"));
            if (input.checked == true) {
                let data = productname1 + " " + productprice1 + " Euro";
                sendRequestWithCustomData(data);
                alertInput.push(data);
            }
            let productname2 = input.getAttribute("name");
            let productprice2 = parseFloat(input.getAttribute("price"));
            let amount = parseInt(input.value);
            let amountString = input.value;
            if (amount > 0) {
                let data = amountString + " X " + productname2 + " " + productprice2 + " Euro";
                sendRequestWithCustomData(data);
                alertInput.push(data);
            }
        }
        alert(alertInput);
    }
    function sendRequestWithCustomData(_data) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?article=" + _data, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=Aufgabe5.js.map