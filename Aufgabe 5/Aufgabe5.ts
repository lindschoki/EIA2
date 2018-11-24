namespace Aufgabe5 {

    window.addEventListener("load", init);



    function init(_event: Event): void {


        getSteppers(data1);
        getRadioBoxes(data2);

    }


    function getSteppers(_product: OptionArticles): void {
        for (let key in _product) {
            let value: Product[] = _product[key];
            for (let i: number = 0; i < value.length; i++) {
                createSteppers(value[i]);
            }
        }
    }

    function getRadioBoxes(_product: OneOptionArticles): void {
        for (let key in _product) {
            let value: Product[] = _product[key];
            for (let i: number = 0; i < value.length; i++) {
                createRadioBoxes(value[i]);
            }
        }
    }

    function createSteppers(_content: Product): void {

       
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            let legend: HTMLLegendElement = document.createElement("legend");
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

    function createRadioBoxes(_content: Product): void {

        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        legend.innerText = _content.name + " | " + _content.price + " Euro";
        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
        let input: HTMLInputElement = document.createElement("input");
        input.type = "radio";
        input.required = true;
        input.name = _content.name;
        input.setAttribute("group", _content.name);
        input.id = _content.name;
        input.setAttribute("Product", _content.name);
        let label: HTMLLabelElement = document.createElement("label");
        label.innerHTML = " " + _content.name + " " + _content.price + " Euro";
        input.appendChild(label);
        fieldset.appendChild(input);
        fieldset.appendChild(document.createElement("br"));
    }
}

