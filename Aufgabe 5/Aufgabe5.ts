/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

/** bekomme es leider nicht hin die Produkte in den shopping cart zu pushen mir machen hier die verschiednen typen schwierigkeiten 
string und Product, ich weis aber leider nicht, wie man das anders lösen kann **/

namespace Aufgabe5 {
    

    window.addEventListener("load", init);



    function init(_event: Event): void {

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", cartChange);


            getSteppers(data1);
            getRadioBoxes(data2);
            createDatatFormular();

        }

        let shoppingcart: Product[] = [];

        function getSteppers(_product: OptionArticles): void {


            for (let key in _product) {
                let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
                fieldset.setAttribute("id", key);
                let legend: HTMLLegendElement = document.createElement("legend");
                legend.innerText = key;
                fieldset.appendChild(legend);
                document.body.appendChild(fieldset);
                let value: Product[] = _product[key];
                for (let i: number = 0; i < value.length; i++) {
                    let input: HTMLInputElement = document.createElement("input");
                    input.type = "number";
                    input.min = "0";
                    input.max = "30";
                    input.step = "1";
                    input.value = "0";
                    input.id = value[i].name;
                    input.setAttribute("group", key);
                    input.setAttribute("number", "" + i);
                    let label: HTMLLabelElement = document.createElement("label");
                    label.innerHTML = " " + value[i].name + " " + value[i].price + " Euro";
                    input.appendChild(label);
                    fieldset.appendChild(input);
                    fieldset.appendChild(label);
                    fieldset.appendChild(document.createElement("br"));
                    fieldset.appendChild(document.createElement("br"));
                }
            }
        }

        function getRadioBoxes(_product: OneOptionArticles): void {

            for (let key in _product) {
                let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
                fieldset.setAttribute("id", key);
                let legend: HTMLLegendElement = document.createElement("legend");
                legend.innerText = key;
                fieldset.appendChild(legend);
                document.body.appendChild(fieldset);
                let value: Product[] = _product[key];
                for (let i: number = 0; i < value.length; i++) {
                    let input: HTMLInputElement = document.createElement("input");
                    input.type = "radio";
                    input.required = true;
                    input.name = key;
                    input.id = value[i].name;
                    input.setAttribute("group", key);
                    input.setAttribute("number", "" + i);
                    let label: HTMLLabelElement = document.createElement("label");
                    label.innerHTML = " " + value[i].name + " " + value[i].price + " Euro";
                    input.appendChild(label);
                    fieldset.appendChild(input);
                    fieldset.appendChild(label);
                    fieldset.appendChild(document.createElement("br"));
                    fieldset.appendChild(document.createElement("br"));
                }
            }
        }

        function createDatatFormular(): void {

            let input: HTMLInputElement = document.createElement("input");
            input.setAttribute("group", "data");
            let data: HTMLElement = document.getElementById("Data");
            data.appendChild(input);
        }

        function cartChange(_event: Event): void {

            let target: HTMLInputElement = <HTMLInputElement>_event.target;
            let productgroup: string = target.getAttribute("group");
            let productnumber: number = parseInt(target.getAttribute("number"));
            let group: string;

            switch (productgroup) {

                case "Kerzen": group = "Kugeln"; break;

                case "Lichterketten": group = "Lichterketten"; break;

                case "Kerzen": group = "Kerzen"; break;

                case "Baumart": group = "Baumart"; break;

                case "Baumspitzen": group = "Baumspitzen"; break;

                case "Post-Weg": group = "Post-Weg"; break;

            }


            shoppingcart.push(group[productnumber]);
            displayShoppingCart();
        }

        function displayShoppingCart(): void {
            let div: HTMLElement = document.createElement("div");

            for (let x: number = 0; x < shoppingcart.length; x++) {
                let shoppingcartfieldset: HTMLElement = document.getElementById("shoppingcart");
                shoppingcartfieldset.appendChild(div);
                shoppingcartfieldset.innerHTML = "";
                div.innerHTML = shoppingcart[x].name + " " + shoppingcart[x].price + " Euro";
            }
        }
    }
}   