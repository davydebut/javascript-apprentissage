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
// fin exo 2 */

// exo 3