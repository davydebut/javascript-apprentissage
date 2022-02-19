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
// (%2) le modulo c'est le reste d'une division
// le reste d'une division est calculer par exemple : 
// 42/12=3,... et le reste = 42-(12*3) = 6
// Un nombre est premier si il a deux diviseurs qui sont 1 et lui même,
// exemple : 11 = 11*1 ou 7=7*1 car il est pas divisble par 2.
// si modulo 2 = 1 c'est qu'il est premier exemple :
// 7/2=3,5 et le reste = 2*3=6 et 7-6 = 1 donc %2 = 1
//  sinon si modulo 2 = 0 c'est qu'il est pas premier exemple :
// 8/2=4 et le reste = 2*4=8 et 8-8= 0 donc %2 = 0
// console.log(12%2);
// ensuite
// n*(n+1)/2 = Somme des N premiers nombres
let nbr = 15; //parseInt(prompt("Entrez un nombre :"));
if (nbr % 2 == 1) {
    console.log(nbr + ' c\'est un nombre premier');
    let entier = (nbr) => nbr++ * nbr / 2;
    console.log(entier(nbr) +' est la somme du nombre premier : ' +nbr);
    // function entier(nbr) {
    //     let nbr1 = nbr + 1,
    //         total = nbr * nbr1,
    //         somme = total / 2;
    //     console.log(somme+' est la somme du nombre premier : '+nbr);
    // }
    // entier(nbr);
} else {
    console.log(nbr + ' n\'est pas un nombre premier');
}
// fin exo 2

// exo 3 et 3 bis
// tant que nb_user est différent de nb_a_trouver redemander;
// L'utilisateur à moins de 5 coups
let nb_a_deviner = 15,
    compteur = 0,
    nb_user = 10; // parseInt(prompt("Entrez un nombre entier"));

function JeuDuPlusOuMoins() {
    do {
        if (nb_user < nb_a_deviner) {
            console.log('C\'est plus !');
            compteur++;
            nb_user++;
        }
        if (nb_user > nb_a_deviner) {
            console.log('C\'est moins !');
            compteur++;
            nb_user--;
        }
        if (compteur == 5) {
            console.log('Perdu ! les '+compteur+' coups sont épuisé.');
            break;
        }
        if (nb_user == nb_a_deviner) {
            console.log('Trouvé en : ' + compteur + ' coups !');
        }
    } while (nb_user != nb_a_deviner);
}

JeuDuPlusOuMoins(nb_user);
// fin exo 3 et 3 bis */