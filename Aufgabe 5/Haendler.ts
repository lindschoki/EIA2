namespace Aufgabe5 {

    export interface Product {
        name: string;
        price: number;
    }

    export interface OptionArticles {
        [key: string]: Product[];
    }


    export let data: OptionArticles = {

        "Kugeln": [
            { name: "Rote Kugeln", price: 1.50 },
            { name: "Goldene Kugeln", price: 1.60 },
            { name: "Weisse Kugeln", price: 1.00 }
        ],

        "Lichterketten": [
            { name: "5 Meter Lichterkette", price: 12.00 },
            { name: "3 Meter Lichterkette", price: 15.00 },
            { name: "10 Meter Lichterkette", price: 20.00 }
        ],

        "Kerzen": [
            { name: "Rote Kerzen", price: 2.00 },
            { name: "Weisse Kerzen", price: 1.50 },
            { name: "Rot-Weisse Kerzen", price: 2.50 }
        ], 

        "Baumart": [
            { name: "Blaufichte", price: 35.00 },
            { name: "Fichte", price: 30.00 },
            { name: "Rotfichte", price: 32.00 },
            { name: "Edeltanne", price: 45.00 },
            { name: "Kiefer", price: 40.00 }
        ],

        "Baumspitzen": [
            { name: "Engel", price: 10.00 },
            { name: "Stern", price: 12.00 }
        ],

        "Post-Weg": [
            { name: "Hermes", price: 15.00 },
            { name: "DHL", price: 10.00 },
            { name: "Express", price: 20.00 }
        ]
    };
}