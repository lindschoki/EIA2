/**
Aufgabe: 4
Name: Arno Lindner
Matrikel: 259153
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace Aufgabe5 {


    window.addEventListener("load", init);



    function init(_event: Event): void {





        createFieldset(data);
        document.addEventListener("change", handleChange);


    }


    function createFieldset(_product: OptionArticles): void {


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
                input.setAttribute("name", value[i].name);
                input.setAttribute("price", value[i].price.toString() + " Euro");
                input.setAttribute("value", "0");
                input.addEventListener("change", handleChange);
                let label: HTMLLabelElement = document.createElement("label");
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
                    input.id = value[i].name;
                    input.setAttribute("group", key);
                    input.setAttribute("name", value[i].name);
                    input.setAttribute("price", value[i].price.toString() + " Euro");
                    input.setAttribute("value", "0");
                    input.addEventListener("change", handleChange);

                }
            }
        }
    }

    //    function createCart(_event: Event): void {
    //       // let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    //        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    //        let target: HTMLInputElement = <HTMLInputElement>_event.target;
    //       
    //        
    //        for (let i: number = 0; i < inputs.length; i++) {
    //            
    //            if (inputs[i].checked) {
    //                let productname: string = target.getAttribute("name");
    //                let productprice: number = parseFloat(target.getAttribute("price"));
    //                console.log(productname, " ", productprice);
    //                
    //            }
    //            
    //        }
    //        /** schleifen und if abfragen durch alle fieldsets durchlaufen lassen und schauen ob es gecheckt ist oder nicht wenn ja zu 
    //        HTMLInputElement.checked für radio buttons, für stepper aktueller wert der hochgezählt wird)**/
    //    }



    function handleChange(_event: Event): void {

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let cart: HTMLElement = document.getElementById("Cart");
        let div: HTMLElement = document.createElement("div");
        cart.appendChild(div);






        for (let i: number = 0; i < inputs.length; i++) {
            let product: HTMLInputElement = inputs[i];


            if (product.type == "radio") {

                if (product.checked == true) {

                    let productname: string = target.getAttribute("name");
                    let productprice: number = parseFloat(target.getAttribute("price"));
                    div.innerHTML = productname + " " + productprice + " Euro";
                }

                //                else if (product.checked == false) {
                //                    displayCart(_event);
                //
                //                }
            }

            if (product.type == "number") {
                let productname: string = target.getAttribute("name");
                let productprice: number = parseFloat(target.getAttribute("price"));
                let amount: string = target.value;
                div.innerHTML = amount + "X " + productname + " " + productprice + " Euro";

               




            }
        }

    }

//
//    function displayCart(_event: Event): void {
//        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
//        let target: HTMLInputElement = <HTMLInputElement>_event.target;
//        let newcart: HTMLElement = document.getElementById("Cart");
//        let div: HTMLElement = document.createElement("div");
//        newcart.appendChild(div);
//        
//
//        newcart.appendChild(div);
//
//
//        for (let x: number = 0; x < inputs.length; x++) {
//            let product: HTMLInputElement = inputs[x];
//            let amount: number = parseFloat(inputs[x].value);
//
//
//            if (product.type == "number") {
//
//                if (amount < 1) {
//                    div.innerHTML = "";
//                    let productname: string = target.getAttribute("name");
//                    let productprice: number = parseFloat(target.getAttribute("price"));
//                    let amount: string = target.value;
//                    div.innerHTML = amount + "X " + productname + " " + productprice + " Euro";
//
//
//                }
//            }
//
//
//
//        }
//    }
}