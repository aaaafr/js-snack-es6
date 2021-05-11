// Creare un array di oggetti,
//  ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà:
// nome 
// peso

const Biciclette = [
    {
        nome : "Claretta",
        peso: 12,

    },

    {
        nome : "Giulietta",
        peso: 15,

    },

    {
        nome : "Porfirio",
        peso: 10,

    },

    {
        nome : "Venere",
        peso: 8,

    },

]


// console.log(Biciclette);
// // Stampare a schermo la bici 
// // con peso minore 
// // utilizzando destructuring e template literal
let biciLeggera = Biciclette[0];

 for(var i = 0; i < Biciclette.length; i ++){
    var bicicletta = Biciclette[i];
    // console.log(bicicletta);
    if(bicicletta.peso < biciLeggera.peso){
        biciLeggera = bicicletta;
    }
 }
 console.log(biciLeggera);


// const pesoMinore =  console.log(Math.min(pesi.peso));
 const {nome,peso} = biciLeggera;
console.log(nome,peso);


console.log(
`
 La bicicletta con peso minore è ${nome} e pesa ${peso} kg
 `
 );










