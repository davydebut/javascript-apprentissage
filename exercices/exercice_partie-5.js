/*  // exo 1
let tab = [];

// Tant que l'utilisateur n'a pas rentrez 20 fois un nombre continuer à lui demander

// tab.push(1,2,3,4,5); // push pour inséré une valeur dans un tableau
// console.log(tab);

for (let i = 0; i < 5; i++) {
    // tab[i] = Number(prompt("entrez un nombre"));
    tab.push(i + 1);
    console.log(tab[i]);
}
// Affiche le tableau en général
console.log(tab);
// afficher la position du plus grand nombre dans le tableau et à quel place il à été saisi
console.log(Math.max(...tab));
let max = Math.max(...tab);
let position = tab.indexOf(max)+1;
console.log('Le nombre '+max+' est le plus grand et à étais saisie en '+position+' ièm position');

// Exemple tableau
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
console.log(myData);
let myArray = myData.split(',');
console.log(myArray);

// tab.sort((a, b) => b - a);
// console.log(tab); 
// Fin exo 1 et Bonus

// exo 2
let nb_user = 8; // parseInt(prompt('Entrez un nombre de départ'));
let tab = [];
let sum = 1;
for (let i = 1; i < nb_user + 1; i++) {
    tab.push(i);
}
console.log(tab);
for (let i = 0; i < tab.length; i++) {
    // console.log(tab[i]);
    // 1*2*3*4*5*6*7*8
    sum *= tab[i];
}
console.log('Le nombre '+nb_user+' = '+sum);
// fin exo 2

// exo 3
let tab1 = [1, 2, 3, 5],
    tab2 = [5, 4, 3, 2],
    sum = 0;
    sumTab = [];
for (let i = 0; i < tab1.length; i++) {
    // console.log(tab1[i]);
    sum = tab1[i] + tab2[i];
    sumTab.push(sum);
    console.log(sumTab);
}
console.log('Nouveau Tableau = '+sumTab);
// fin exo 3

// exo 4
let tab = [],
    sum = 0,
    compteur = parseInt(prompt('Entrez combien de notes voulez-vous entrez :'));

while (tab.length < compteur) {
    let nb_user = parseInt(prompt('Entrez les notes de la classe'));
    tab.push(nb_user);
    // console.log(tab);
}
// console.log(tab);
for (let i = 0; i < tab.length; i++) {
    // console.log(tab[i]);
    sum += tab[i];
    // console.log(sum);
}
let moyenne = sum / tab.length;
// console.log(sum);
console.log('la moyenne est ' + moyenne);
for (let i = 0; i < tab.length; i++) {
    // console.log(tab[i]);
    if (moyenne < tab[i]) {
        console.log('les nombres supérieur à la moyenne de la classe sont ' + tab[i]);
    }
}
// fin exo 4

// exo 5
let age_user = Number(parseInt(prompt('Entrez votre âge :')));

if (age_user <= 5) {
    console.log('Trop petit !');
} else if (age_user >= 6 || age_user <= 7) {
    console.log(('Poussin !'));
} else if (age_user >= 8 || age_user <= 9) {
    console.log('Pupille !');
} else if (age_user >= 10 || age_user <= 11) {
    console.log('Minime !');
} else {
    console.log('Cadet !');
}
// fin exo 5 */