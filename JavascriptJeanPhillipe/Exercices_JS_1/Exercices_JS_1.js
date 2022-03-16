/* // Exercice 1 : Manipulation des variables
// 1.
let prenom = 'Jean',
    nom = 'Dupont';

console.log('Bonjour, ' + prenom + ' ' + nom + ', ravi de faire votre connaissance.');

// 2.
document.write('<p>Bonjour, <strong>' + prenom + ' ' + nom + '</strong>, ravi de faire votre connaissance.</p>');

// Exercice 2 : Récupérer une entrée utilisateur 

let prenom = prompt('Entre ton prénom :'),
    nom = prompt('Entre ton nom :');

console.log('Bonjour, ton prénom est ' + prenom + '.');
console.log('Et ton nom de famille est ' + nom + '.');

// Exercice 3 : Afficher le résultat d'un calcul 

let prenom = prompt('Entre ton prénom :'),
age = Number(prompt('Écrit ton âge :')),
prenom2 = prompt('Entre ton prénom :'),
age2 = Number(prompt('Écrit ton âge :'));

function difference(a, b){
    return Math.round(Math.abs(a-b));
}

console.log(prenom+' et '+prenom2+' ont '+difference(age, age2)+' années de différence.');

// Exercice 4 : Condition

let age = Number(prompt('Entrez votre âge :'));

function N(a) {
    return Math.round(Math.abs(a - 18));
}

if (age >= 18) {
    console.log('Tu est majeur : Bienvenue sur notre site au contenu douteux');
} else {
    console.log('Tu est mineur : Désolé, va faire un tour sur gulli.fr et repasse dans ' + N(age) + ' année(s)');
}

// Exercice 4bis : Calcul avec des conditions combinées ( && ou || ) */

let longueur = Number(prompt('Entrez une longueur')),
    largeur = Number(prompt('Entrez une largeur')),
    hauteur = Number(prompt('Entrez une hauteur'));

verification(longueur);
verification(largeur);
verification(hauteur);

function verification(chiffre) {

    let verification = Math.sign(chiffre);

    if (verification == -1 || verification == null) {
        console.error('la valeur : ' + chiffre + ' est négative ou nulle');
    } else if (verification == 1) {
        let volume = longueur * largeur * hauteur;
        console.log('la longueur : ' + longueur + ' multiplié par la largeur : ' + largeur + ' multiplié par la hauteur : ' + hauteur + ' est égal au volume : ' + volume);
    }
}