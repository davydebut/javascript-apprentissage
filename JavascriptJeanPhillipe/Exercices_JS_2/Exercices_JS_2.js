/* // Exercice 5 : La boucle while */
/*
let nbre = Number(prompt('Entrez un nombre :')),
    compteur = 0;

while (nbre > compteur) {
    compteur++;
    console.log(compteur);
}

// Exercice 6 : La boucle for 

let max = Number(prompt('Entrez un nombre :'));

for (let i = 0; i <= max; i++) {
    console.log(i);
    if (i >= 20) {
        console.log('j\'en ai marre de compter');
        break;
    }
}


// Exercice 7 : Les tableaux */

let tableau = [];


for (let i = 0; i < 10; i++) { // initialisation ; condition ; incrémentation
    // console.log(Math.floor(Math.random() * 100));
    // //            65        0.6532984 * 100 = 65.32
    const aleatoire = Math.floor(Math.random() * 100);
    tableau.push(aleatoire);
}

// console.log(tableau);

for (let j = 0; j < tableau.length; j++) {
    console.log(tableau[j]);
}

// Exercice 8 : Les fonctions