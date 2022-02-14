/* exos 1

// Aire se calcul par longeur multiplié par largeur
// un carré de 4cm par 4cm

let longeur = 4, largeur = 4, aire = longeur*largeur;

console.log(aire);

fin exos 1 */

/* exos 2 
Carré d'un chiffre = chiffre * chiffre;


let chiffre = 16;

let
    // chiffre = prompt("Entrer valeur", "0"),
    num = parseInt(chiffre),
    carre = num * num;

console.log("carré de " + num + " est : " + carre);

fin exos 2 */

/* exos 3

Année actuelle : let Annee = new Date().getFullYear()
Ensuite tu calcule l'année actuelle moins l'âge de l'utilisateur,
let nbre = prompt("Entrez votre âge", "0");
let age = parseInt(nbre);
let naissance = Annee - age;
Votre année de naissance est : naissance

let Annee = new Date().getFullYear(),
    nbre = 16,
    // nbre = prompt("Entrez votre âge", "0"),
    age = parseInt(nbre),
    naissance = Annee - age;

    console.log("Votre année de naissance est : " + naissance)

fin exos 3 */

/* exos 4

// nbre = prompt("Saisissez un nombre"),
// nbreAvant = nbre--;
// nbreSuivant = nbre++;

let 
    nbre = 16,
    // nbre = prompt("Saisissez un nombre", "0"),
    nombre = parseInt(nbre),
    nbreAvant = nombre - 1,
    nbreSuivant = nombre + 1;

    console.log("Le nombre d'avant est : " + nbreAvant + ", Et le nombre suivant est : " + nbreSuivant)

fin exos 4 */

// exos 5

// la somme des entiers c'est la moyenne qui est multiplié par le nombre de chiffres exemple :
// 1 + 2 + 3 + 4 = 10 ça c'est la somme ;
// 10 / 4 = 2,5 ça c'est la moyenne ;
// 2,5 * 4 = 10 c'est la somme des entiers.

let somme = 0,
    moyenne = 0,
    entiers = 0,
    // nbre = prompt("Entrez un nombre entre 1 et 100", "0"),
    nbre = 10;
    // nombre = parseInt(nbre).value;

if (nbre > 100) {
    console.log("trop de chiffres, essayez entre 1 et 100")
} else {
    // for (i = 0; i <= nbre -1; i++) {
    //     somme = i * nbre;
    //     moyenne = somme / i;
    //     entiers = moyenne * i;
    //     console.log(somme);
    //     console.log(moyenne);
    //     console.log(entiers);
    //     console.log(i);
    //     console.log(nbre[i]);
    // }
}