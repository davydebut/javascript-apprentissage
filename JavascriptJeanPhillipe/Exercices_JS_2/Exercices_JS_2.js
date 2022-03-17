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


// Exercice 7 : Les tableaux 

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

// Exercice 8 : Les fonctions */

/* let nbr_utils = Number(prompt('Entrez un nombre :'));

function calcul() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log(sum);
}

calcul(34, 2, 65, 99);
calcul(35, 1, 66, 88); */

/* let saisie = true,
    nombre = 0,
    tab_nbre = [];

function calcul2(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    console.log(sum);
    return sum;
}

while (saisie) {
    nombre = prompt('Entrez un nombre :');
    // console.log(nombre);
    if (nombre > 0) { // if(nombre != null && nombre != "") null vaut 0 donc pour exclure null faut strictement supérieur à 0
        tab_nbre.push(Number(nombre));
        console.log(tab_nbre);
    }
    if (!nombre) {
        saisie = false;
    }
}

calcul2(tab_nbre);
console.log(tab_nbre); */

// console.log(tab_nbre);

// Exercice 9 : Les objets littéraux

/* let famille = {
    nom: "Smith",
    père: "John",
    maman: "Martine",
    fils: "Jean",
    fille: "Melanie"
};

console.log(famille);

for (const key in famille) {
    if (famille[key] != famille.nom) {
        console.log(famille[key] + ' ' + famille.nom);
    }
} */

