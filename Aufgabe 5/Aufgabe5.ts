namespace Aufgabe5 {

    interface Product {
        name: string;
        price: number;
    }
    
    window.addEventListener("load", init);

    interface OptionArticles {
        [key: string]: Product[];
    }

    interface OneOptionArticles {
        [key: string]: Product[];
    }

    let data1: OptionArticles = {

        "balls": [
            { name: "Rote Kugeln", price: 1.50 },
            { name: "Goldene Kugeln", price: 1.60 },
            { name: "Weisse Kugeln", price: 1.00 }
        ],

        "lightstrings": [
            { name: "5 Meter Lichterkette", price: 12.00 },
            { name: "3 Meter Lichterkette", price: 15.00 },
            { name: "10 Meter Lichterkette", price: 20.00 }
        ],

        "candles": [
            { name: "Rote Kerzen", price: 2.00 },
            { name: "Weisse Kerzen", price: 1.50 },
            { name: "Rot-Weisse Kerzen", price: 2.50 }
        ]
    };

    let data2: OneOptionArticles = {

        "trees": [
            { name: "Blaufichte", price: 35.00 },
            { name: "Fichte", price: 30.00 },
            { name: "Rotfichte", price: 32.00 },
            { name: "Edeltanne", price: 45.00 },
            { name: "Kiefer", price: 40.00 }
        ],

        "treetop": [
            { name: "Engel", price: 10.00 },
            { name: "Stern", price: 12.00 }
        ],

        "post": [
            { name: "Hermes", price: 15.00 },
            { name: "DHL", price: 10.00 },
            { name: "Express", price: 20.00 }
        ]
    };
    
    function init(): void {
        createSteppers();
        }
    
    function createSteppers(): void {
        for (let i: number = 0; i < data1.length; i++) {
            
        
        }
            

        
        
    }
}