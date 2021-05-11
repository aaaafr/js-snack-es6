// Creare un array di oggetti di squadre di calcio.
const squadre = [
    {
        nome : "JUVENTUS",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "SOUTHAMPTON",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "ARSENAL",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "MANCHESTER CITY",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "REAL MADRID",
        punti : 0,
        falliSubiti : 0,
    },
    {
        nome : "CHELSEA",
        punti : 0,
        falliSubiti : 0,
    },

]

console.log(squadre);

for(let i = 0; i < squadre.length; i++){
    squadre[i].punti = Math.floor(Math.random()*100);
    squadre[i].falliSubiti = Math.floor(Math.random()*100);    
}

let squadre2 = [];
for(let i = 0; i < squadre.length; i++){
    const {nome,falliSubiti} = squadre[i]
    console.log(nome,falliSubiti);
    squadre2.push({nome,falliSubiti});
    console.log(
        `
        La squadra ${nome} ha subito ${falliSubiti} falli
        `
    );
}





// const [, , , {nome,falliSubiti}] =
// console.log(nome,peso);

//  Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare,
//  le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
//  Punti fatti e falli subiti.
// Infine usando la destrutturazione 
// creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti 
// e stampiamo tutto in console.

