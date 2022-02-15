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

/* exos 5

// la somme des entiers c'est la moyenne qui est multiplié par le nombre de chiffres exemple :
// 1 + 2 + 3 + 4 = 10 ça c'est la somme ;
// 10 / 4 = 2,5 ça c'est la moyenne ;
// 2,5 * 4 = 10 c'est la somme des entiers.

let nb_user = 0,
    somme;
nb_user = prompt('Un nombre');
// tant que la saisi user n'est pas entre 0 et 100 on redemande
while (nb_user < 0 || nb_user > 100) {
    nb_user = prompt('Un nombre entre 0 et 100 :');
}
somme = 0;
for (let i = 1; i <= nb_user ; i++) {
    // console.log(i);
    somme += i;
    // console.log(somme);
}

Fin exos 5 */

/* // exos 6

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    if(tab[i]%2 == 0){
        console.log('le chiffre ' + tab[i] + ' pair');
    }else{
        console.log('le chiffre ' + tab[i] + ' impair');
    }
}

// fin exos 6 */

