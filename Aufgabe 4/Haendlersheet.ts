namespace Weihnachtsbaumkonfigurator {
    
      export interface Products {
        name: string;
        price: number;
    }

   export let trees: Products[] = [
        { name: "Blaufichte", price: 35 }, 
        { name: "Fichte", price: 30 }, 
        { name: "Rotfichte", price: 32 }, 
        { name: "Edeltanne", price: 45 }, 
        { name: "Kiefer", price: 40 }];

   export let balls: Products[] = [
        { name: "Rote Kugeln", price: 1.50 }, 
        { name: "Goldene Kugeln", price: 1.60 }, 
        { name: "Weisse Kugeln", price: 1.00 }];

   export let lightstrings: Products[] = [
        { name: "5 Meter Lichterkette", price: 12 }, 
        { name: "3 Meter Lichterkette", price: 15 }, 
        { name: "10 Meter Lichterkette", price: 20 }];

   export let candles: Products[] = [
        { name: "Rote Kerzen", price: 2 }, 
        { name: "Weisse Kerzen", price: 1.50 }, 
        { name: "Rot-Weisse Kerzen", price: 2.50 }];

   export let treetop: Products[] = [
        { name: "Engel", price: 10 }, 
        { name: "Stern", price: 12 }];
    
   export let post: Products[] = [
        { name: "Hermes", price: 30 },
        { name: "DHL", price: 20 },
        { name: "Express", price: 35 }];


    
}