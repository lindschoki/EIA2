var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    function init(_event) {
        createSteppers(Aufgabe5.data);
    }
    function createSteppers(_product) {
        for (let key in _product) {
            let value = _product[key];
            for (let i = 0; i < value.length; i++) {
                let fieldSet = document.getElementById("fieldset");
                let input = document.createElement("input");
                input.type = "number";
                input.min = "0";
                input.max = "30";
                input.step = "1";
                input.value = "0";
                fieldSet.appendChild(input);
                labelcontent(value[i]);
                fieldSet.appendChild(document.createElement("hr"));
            }
        }
    }
    function labelcontent(_content) {
        let label = document.createElement("label");
        label.innerHTML = " " + _content.name + _content.price + " Euro";
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map