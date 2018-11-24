namespace Aufgabe5 {

    window.addEventListener("load", init);



    function init(_event: Event): void {


        createSteppers(data);

    }


    function createSteppers(_product: OptionArticles, content: Product): void {
        for (let key in _product) {
            let value: Product[] = _product[key];
            for (let i: number = 0; i < value.length; i++) {
                let fieldSet: HTMLElement = document.getElementById("fieldset");
                let input: HTMLInputElement = document.createElement("input");
                input.type = "number";
                input.min = "0";
                input.max = "30";
                input.step = "1";
                input.value = "0";
                let label: HTMLLabelElement = document.createElement("label");
                fieldSet.appendChild(input);
                input.appendChild(label);
                label.innerHTML = " " + content.name + content.price + " Euro";
                fieldSet.appendChild(document.createElement("hr"));
            }
        }
    }

}








