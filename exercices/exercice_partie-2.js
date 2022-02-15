/* // Exo 1

// let note = prompt('Quel est votre note ?');
let note = 10;

if (note >= 12) {
    console.log('Tu as la moyenne');
} else {
    console.log('Tu n\' a pas la moyenne');
}

Fin exos 1 */

// Option + MAJ + A pour commenter --> /* */

/* // exos 2

// let nb_1 = parseInt(prompt('Entrez un premier nombre')),
//     nb_2 = parseInt(prompt('Entrez un second nombre'));
let nb_1 = 10,
    nb_2 = 100;

    if(nb_1 < nb_2){
        console.log('Ce nombre ' + nb_2 + ' est plus grand que ' + nb_1)
    }else if (nb_1 > nb_2){
        console.log('Ce nombre ' + nb_1 + ' est plus grand que ' + nb_2)
    }else{
        console.log('les nombres ' + nb_2 + ' et ' + nb_1 + ' sont identiques')
    }
// fin exos 2 */

/* // exos 3

// let nb_user = parseInt(prompt('Entrez un nombre entre 1 et 7'));
let nb_user = 5; // jour de la semaine compris entre 1 et 7

switch (nb_user) {
    case 1:
        console.log('Lundi');
        break;
    case 2:
        console.log('Mardi');
        break;
    case 3:
        console.log('Mercredi');
        break;
    case 4:
        console.log('Jeudi');
        break;
    case 5:
        console.log('Vendredi');
        break;
    case 6:
        console.log('Samedi');
        break;
    case 7:
        console.log('Dimanche');
        break;
    default:
        break;
}

// fin exos 3 */

/* // exos 4

// let nb_user = parseInt(prompt('Entrez un nombre qui correspond au mois'));
let nb_user = 6; // Juin

switch (nb_user) {
    case 1:
        console.log('Janvier');
        break;
    case 2:
        console.log('Fevrier');
        break;
    case 3:
        console.log('Mars');
        break;
    case 4:
        console.log('Avril');
        break;
    case 5:
        console.log('Mai');
        break;
    case 6:
        console.log('Juin');
        break;
    case 7:
        console.log('Juillet');
        break;
    case 8:
        console.log('Août');
        break;
    case 9:
        console.log('Septembre');
        break;
    case 10:
        console.log('Octobre');
        break;
    case 11:
        console.log('Novembre');
        break;
    case 12:
        console.log('Décembre');
        break;

    default:
        break;
}

// fin exos 4 */

/* // exos 5
// let prixHT = parseInt(prompt('Prix HT'));
let prixHT = 10,
    tva1 = 5.5 / 100,
    tva2 = 20 / 100,
    prixTTC1 = prixHT + tva1,
    prixTTC2 = prixHT + tva2;

// console.log(tva1, tva2);

console.log('Prix TTC pour ' + prixHT + ' avec la TVA à 5,5% est de ' + prixTTC1 + ', et avec la TVA à 20% est de ' + prixTTC2)

// fin exos 5 */

/* // exos 6

// let age = parseInt(prompt('Entrez votre âge'));
let age = 16;

if(age < 18){
    majorite = 18 - age;
    console.log('Il vous reste ' + majorite + ' ans pour avoir la majorité')
}else{
    console.log('Vous avez ' + age + ' ans, vous êtes majeur !')
}

// fin exos 6 */

/* // exos 7
// let age_user = parseInt(prompt('Entrez votre âge :'));
let age_user = 29;
if(age_user <= 62){
    retraite = 62 - age_user;
    console.log('Il vous reste ' + retraite + ' ans jusqu\'à la retraite')
}else{
    console.log('Vous êtes déjà à la retraite !')
}

// fin exos 7 */

/* // exos 8

// let argent = parseInt(prompt('Entrez votre solde :'));
let argent = 8,
    baguette = 0.90,
    nbr_baguette = 10,
    somme = baguette * nbr_baguette;

// prix au nombre de baguettes
for (let i = 1; i <= 10; i++) {
    somme = baguette * i;
    console.log(somme)

}
if (somme > argent) {
    total = somme - argent;
    console.log('Il te manque ' + total + '€ pour acheter les ' + nbr_baguette + ' baguettes.')
} else {
    console.log('Tu peux acheter les ' + nbr_baguette + ' baguettes')
}

// fin exos 8 */