var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    function init(_event) {
        //        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        //
        //        for (let i: number = 0; i < fieldsets.length; i++) {
        //            let fieldset: HTMLFieldSetElement = fieldsets[i];
        //            fieldset.addEventListener("change", cartChange);
        getSteppers(Aufgabe5.data1);
        getRadioBoxes(Aufgabe5.data2);
    }
    //let shoppingcart: Product[] = [];
    function getSteppers(_product) {
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
                input.id = value[i].name;
                input.setAttribute("group", key);
                input.setAttribute("number", "" + i);
                let label = document.createElement("label");
                label.innerHTML = " " + value[i].name + " " + value[i].price + " Euro";
                input.appendChild(label);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                fieldset.appendChild(document.createElement("br"));
                fieldset.appendChild(document.createElement("br"));
            }
        }
    }
    function getRadioBoxes(_product) {
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
                input.type = "radio";
                input.required = true;
                input.name = key;
                input.id = value[i].name;
                input.setAttribute("group", key);
                input.setAttribute("number", "" + i);
                let label = document.createElement("label");
                label.innerHTML = " " + value[i].name + " " + value[i].price + " Euro";
                input.appendChild(label);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                fieldset.appendChild(document.createElement("br"));
                fieldset.appendChild(document.createElement("br"));
            }
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map