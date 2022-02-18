/* // exo 1 et bis
let tab = [12, 2, 5, 3, 24, 6, 22, 10];
console.log("Voici le tableau : ");
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}
let trier = (nbr1, nbr2) => nbr2 - nbr1; // function(nbr1, nbr2) { nbr1 - nbr2;}
tab.sort(trier);
console.log("Voici le tableau trié du plus grand au plus petit : ");
for (let i = 0; i < tab.length - 1; i++) {
    // console.log(tab[i]);
    console.log(tab[i] + ' est plus grand que ' + tab[i + 1]);
}
let trierBis = (nbr1, nbr2) => nbr1 - nbr2;
tab.sort(trierBis);
console.log("Et voici le tableau trié du plus petit au plus grand : ");
for (let i = 0; i < tab.length - 1; i++) {
    // console.log(tab[i]);
    console.log(tab[i] + ' est plus petit que ' + tab[i + 1]);
}
// fin exo 1 et bis

// exo 2
// Un nombre est premier si il a deux diviseurs qui sont 1 et lui même,
// exemple : 11 = 11*1 ou 7=7*1 car il est pas divisble par 2.
// si modulo 2 = 1 c'est qu'il est premier sinon
// Si modulo 2 = 0 c'est qu'il est pas premier
// console.log(12%2);
// ensuite
// n*(n+1)/2 = Somme des N premiers nombres
let nbr = 15; //parseInt(prompt("Entrez un nombre :"));
if (nbr % 2 == 1) {
    console.log(nbr + ' c\'est un nombre premier');
    function entier(nbr) {
        let nbr1 = nbr + 1,
            total = nbr * nbr1,
            somme = total / 2;
        console.log(somme+' est la somme du nombre premier : '+nbr);
    }
    entier(nbr);
} else {
    console.log(nbr + ' n\'est pas un nombre premier');
}
// fin exo 2 */