/* // exo 1

let tab = [12, 53, 47, 58, 72],
    // nb_user = parseInt(prompt('Entrez un nombre')),
    nb_user = 10,
    compteur = 0;


for (let i = 0; i < tab.length; i++) {
    // console.log(tab[i]);
    if (nb_user === tab[i]) {
        compteur = 1;
    }
}

if (compteur == 1) {
    console.log('Le nombre ' + nb_user + ' est bien dans le tableau')
} else {
    console.log('Le nombre ' + nb_user + ' n\'est pas dans le tableau')
}

// fin exo 1

// exo 2

let tab = [5, 3, 2, 10],
    // nb_user = parseInt(prompt('Entrez un nombre')),
    nb_user = 20,
    somme = 0;

for (let i = 0; i < tab.length; i++) {

    // console.log(tab[i]);
    somme += tab[i];
    // console.log(somme);

}
console.log(somme);
if(nb_user > somme){
    console.log('Le nombre ' + nb_user + ' est > supérieur à ' + somme + ' la somme du tableau')
} else if (nb_user < somme){
    console.log ('Le nombre ' + nb_user + ' est < inférieur à ' + somme + ' la somme du tableau')
}else{
    console.log ('Le nombre ' + nb_user + ' est = égal à ' + somme + ' la somme du tableau')
}

// fin exo 2

// exo 3

let tab = [5, 3, 2, 10],
    // nb_user = parseInt(prompt('Entrez un nombre')),
    nb_user = 10,
    somme = 0;

for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
}

while (somme != nb_user) {
    if (nb_user < somme) {
        console.log('Le nombre ' + nb_user + ' est inférieur à ' + somme + ' la somme du tableau ');
        // nb_user = parseInt(prompt('Rententez votre chance :'));
        console.log('Retentez votre chance');
    } else if (nb_user > somme) {
        console.log('Le nombre ' + nb_user + ' est supérieur à ' + somme + ' la somme du tableau ');
        // nb_user = parseInt(prompt('Rententez votre chance :'));
        console.log('Retentez votre chance');
    }
    nb_user++;
        console.log('Trouvé ! Le nombre ' + nb_user + ' est égal à ' + somme + ' la somme du tableau ')
}

// fin exo 3 

// exo 4
let tab = [34, 67, 84, 99, 58, 12, 1],
    flag = 1;
// nb_user = 3;

// console.log(tab[nb_user]);

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]); // Afficher les éléments du tableau
}

while (flag) {

    nb_user = parseInt(prompt('Entrez un nombre')) - 1;
    // nb_user = 8;

    if (nb_user < tab.length && nb_user != -1) {
        console.log('Voici le nombre ' + tab[nb_user] + ' à la position ' + (nb_user + 1))
        flag = 0;
    } else {
        console.log('L\'index ' + nb_user + ' du tableau n\'existe pas')
    }
} */

// exo 5
let tab = [31, 98, 75, 54, 28];

