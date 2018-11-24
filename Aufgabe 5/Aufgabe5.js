var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    function init(_event) {
        getSteppers(Aufgabe5.data1);
        getRadioBoxes(Aufgabe5.data2);
    }
    function getSteppers(_product) {
        for (let key in _product) {
            let value = _product[key];
            for (let i = 0; i < value.length; i++) {
                createSteppers(value[i]);
            }
        }
    }
    function getRadioBoxes(_product) {
        for (let key in _product) {
            let value = _product[key];
            for (let i = 0; i < value.length; i++) {
                createRadioBoxes(value[i]);
            }
        }
    }
    function createSteppers(_content) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = _content.name + " | " + _content.price + " Euro";
        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
        //        let input: HTMLInputElement = document.createElement("input");
        //        input.type = "number";
        //        input.min = "0";
        //        input.max = "30";
        //        input.step = "1";
        //        input.value = "0";
        //        input.id = _content.name;
        //        input.setAttribute("Product", _content.name);
        //        let label: HTMLLabelElement = document.createElement("label");
        //        label.innerHTML = " " + _content.name + " " + _content.price + " Euro";
        //        input.appendChild(label);
        //        fieldset.appendChild(input);
        //        fieldset.appendChild(document.createElement("br"));
    }
    function createRadioBoxes(_content) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = _content.name + " | " + _content.price + " Euro";
        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
        let input = document.createElement("input");
        input.type = "radio";
        input.required = true;
        input.name = _content.name;
        input.setAttribute("group", _content.name);
        input.id = _content.name;
        input.setAttribute("Product", _content.name);
        let label = document.createElement("label");
        label.innerHTML = " " + _content.name + " " + _content.price + " Euro";
        input.appendChild(label);
        fieldset.appendChild(input);
        fieldset.appendChild(document.createElement("br"));
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map