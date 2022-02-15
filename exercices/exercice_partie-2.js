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

// exos 5