// Exo 1

let note = prompt('Quel est votre note ?');

if (note >= 12) {
    console.log('Tu as la moyenne');
} else {
    console.log('Tu n\' a pas la moyenne');
}

// exos 2

// prompt un nombre 1 = lundi

let nombre = parseInt(prompt('Entrez un nombre entre 1 et 7'));

switch (nombre) {
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
        console.log('Désolé ce n\' est pas un jour de la semaine');
}