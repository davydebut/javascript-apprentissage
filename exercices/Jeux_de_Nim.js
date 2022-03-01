/* let name_user1 = {
        allumettes: 16,
        name: 'Julien', // prompt('Entrez votre nom :'),
        nb_saisi: 2, // Number(prompt('combien d\'allumette vous prenez (entre 1 et 3)')),
        presentation() {
            this.allumettes -= this.nb_saisi;
            console.log(this.name + ' il vous reste ' + this.allumettes + ' allumettes, combien vous prenez (entre 1 et 3)');
            console.log(this.nb_saisi);
        }
    },
    name_user2 = {
        name: 'Thomas', // prompt('Entrez votre nom :'),
        nb_saisi: 2,
        reste: function () {
            return allumettes -= this.nb_saisi;
        },
        presentation() {
            if (this.nb_saisi >= 1 && this.nb_saisi <= 3) {
                console.log(this.name + ' il vous reste ' + this.reste + ' allumettes, combien vous prenez (entre 1 et 3)');
                console.log(this.nb_saisi);
            }
        }
    };
// console.log(allumettes);

console.log(name_user1.presentation);
// console.log(name_user1.presentation(), name_user2.presentation());


 while (allumettes != 0) {
    if (name_user1.nb_saisi >= 1 && name_user2.nb_saisi <= 3) {
        console.log('il reste ' + allumettes + ' allumettes. ' + name_user1.name + ' combien d\'allumette vous prenez (entre 1 et 3)');
        name_user1.reste;
        console.log(this.nb_saisi, allumettes, this.reste);
        console.log('il reste ' + allumettes + ' allumettes. ' + name_user2.name + ' combien d\'allumette vous prenez (entre 1 et 3)');
        name_user2.reste;
        console.log(name_user2.nb_saisi, allumettes, name_user2.reste);
    }
}


// il faut que le programme demande à chaque fois aux deux joueurs d'entrez un saisie donc
if (nb_saisi >= 1 && nb_saisi <= 3) {
    if (allumettes != 0) {
        console.log('il reste ' + allumettes + ' allumettes. ' + name_user1 + ' combien d\'allumette vous prenez (entre 1 et 3)');
        // il faut a chaque fois que la saisie est écrite d'enlever des allumettes donc
        allumettes -= nb_saisi;
        console.log(allumettes);
        console.log('il reste ' + allumettes + ' allumettes. ' + name_user2 + ' combien d\'allumette vous prenez (entre 1 et 3)');
        allumettes -= nb_saisi;
        console.log(allumettes);
    } else {
        console.log(name_user + ' a gagné !');
    }
} */

/* let allumettes = 16;

class Joueur {
    constructor(_nom, _saisi) {
        this.name = _nom;
        this.saisi = _saisi;
    }
    reste() {
        if (allumettes != 0) {
            allumettes -= this.saisi;
            return 'Il reste ' + allumettes + '. ' + this.name + ' combien d\'allumettes vous prenez (entre 1 et 3) ' + this.saisi;
        } else {
            return this.name + ' a gagné !';
        }
    }
}

let joueur1 = new Joueur('Julien', 2),
    joueur2 = new Joueur('Thomas', 2);
console.log('Il y a ' + allumettes + ' allumettes sur la table. ' + joueur1.name + ' combien vous prenez ? : ' + joueur1.saisi);

while (allumettes != 0) {
    console.log(joueur2.reste());
    console.log(joueur1.reste());
}
    
console.log(joueur2.reste());
console.log(joueur1.reste()); */

// On recommence

let nomJoueur1 = 'Julien',
    nomJoueur2 = 'Thomas',
    allumettes = 16,
    nb_saisi,
    gagnant = 'joueur2',
    nbrToursJoueur1 = 0,
    nbrToursJoueur2 = 0;

while (allumettes != 0) {
    if (gagnant != 'joueur1') {
        console.log(nomJoueur1 + ' combien d\'allumettes tu veux prendre entre 1 & 3');
        nb_saisi = prompt(nomJoueur1 + ' Entrez un nombre entre 1 & 3');

        if (nb_saisi > 0 && nb_saisi < 4 && nb_saisi <= allumettes) {
            allumettes = allumettes - nb_saisi;
            console.log(allumettes);
            nbrToursJoueur1++;
            gagnant = 'joueur1';
        }
    }

    if (gagnant != 'joueur2') {
        console.log(nomJoueur2 + ' combien d\'allumettes tu veux prendre entre 1 & 3');
        nb_saisi = prompt(nomJoueur2 + ' Entrez un nombre entre 1 & 3');

        if (nb_saisi >= 1 && nb_saisi <= 3 && nb_saisi <= allumettes) {
            allumettes = allumettes - nb_saisi;
            console.log(allumettes);
            nbrToursJoueur2++;
            gagnant = 'joueur2';
        }
    }


    console.log(nbrToursJoueur1);
    console.log(nbrToursJoueur2);
    console.log(allumettes);
}

console.log(nbrToursJoueur1);
console.log(nbrToursJoueur2);
console.log(allumettes);

if (nbrToursJoueur1 > nbrToursJoueur2) {
    console.log(nomJoueur1 + ' Tu à gagné !');
} else {
    console.log(nomJoueur2 + ' Tu à gagné !');
}

// On recommence
/* let allumettes = 16,
    joueur1 = 'Julien',
    joueur2 = 'Thomas',
    nbAllumettesJoueur1 = 0,
    nbAllumettesJoueur2 = 0;

console.log('il faut retirer entre 1 et 3 allumettes');
while (allumettes > 1) {
    console.log('Allumettes disponible : ' + allumettes);
    console.log("Tour du premier Joueur");
    nbAllumettesJoueur1 = -1;
    console.log(joueur1 + ' Combien d\'allumettes vous voulez retirer ? (entre 1 & 3) :');
    nbAllumettesJoueur1 = 2;
    console.log(joueur1 + ' retire ' + nbAllumettesJoueur1 + ' allumettes');
    allumettes -= nbAllumettesJoueur1;
    console.log('Allumettes disponible : ' + allumettes);
    if (allumettes == 1) {
        console.log(joueur1 + ' a gagné !');
    }
    console.log('Tour du deuxième joueur');
    nbAllumettesJoueur2 = 0;
    console.log(joueur2 + ' Combien d\'allumettes vous voulez retirer ? (entre 1 & 3) :');
    if ((allumettes - 1) % 4 == 1) { // 13/4=3,25 4x3=12 13-12 = 1
        nbAllumettesJoueur2 = 1;
    } else if ((allumettes - 2) % 4 == 1) {
        nbAllumettesJoueur2 = 2;
    } else if ((allumettes - 3) % 4 == 1) {
        nbAllumettesJoueur2 = 3;
    } else {
        nbAllumettesJoueur2 = 1
    }
    console.log(joueur2 + ' retire ' + nbAllumettesJoueur2 + ' allumettes');
    allumettes -= nbAllumettesJoueur2;
    if (allumettes == 1) {
        console.log(joueur2 + ' a gagné !');
    }
} */

// on recommence

/* let allumettes = 16,
    joueur1 = 'Julien',
    joueur2 = 'Thomas',
    nbTour_joueur1 = 0,
    nbTour_joueur2 = 0,
    nbSaisi_joueur1 = 0,
    nbSaisi_joueur2 = 0;

    while (allumettes !=0) {
        if (nbSaisi_joueur1 <= allumettes) {
            allumettes -= nbSaisi_joueur1;
        }
    } */

/* 
while (allumettes != 0) {
    // console.log('il reste ' + allumettes + ' . ' + joueur1 + ' combien tu veux prendre d\'allumettes ? :');
    nbSaisi_joueur1 = Number(prompt('il reste ' + allumettes + ' . ' + joueur1 + ' combien tu veux prendre d\'allumettes ? :'));
    if (nbSaisi_joueur1 > 3 && nbSaisi_joueur1 < 1) {
        nbSaisi_joueur1 = Number(prompt('il reste ' + allumettes + ' . ' + joueur1 + ' combien tu veux prendre d\'allumettes ? :'));
    } else {
        console.log(nbSaisi_joueur1);
        allumettes -= nbSaisi_joueur1;
        nbTour_joueur1++;
        // console.log('il reste ' + allumettes + ' . ' + joueur2 + ' combien tu veux prendre d\'allumettes ? :');
        nbSaisi_joueur2 = Number(prompt('il reste ' + allumettes + ' . ' + joueur2 + ' combien tu veux prendre d\'allumettes ? :'));
        if (nbSaisi_joueur2 > 3 && nbSaisi_joueur2 < 1) {
            nbSaisi_joueur2 = Number(prompt('il reste ' + allumettes + ' . ' + joueur2 + ' combien tu veux prendre d\'allumettes ? :'));
        } else {
            console.log(nbSaisi_joueur2);
            allumettes -= nbSaisi_joueur2;
            nbTour_joueur2++;
        }
    }
}
console.log(nbTour_joueur1);
console.log(nbTour_joueur2);
if (nbTour_joueur1 > nbTour_joueur2) {
    console.log(joueur1 + ' tu a gagné !');
} else {
    console.log(joueur2 + ' tu a gagné !');
} */


// correction du prof

let allumettes = 16,
    perso1 = prompt('Saisir un nom pour joueur 1'),
    perso2 = prompt('Saisir un nom pour joueur 2'),
    joueur, // le joueur qui est en train de jouer
    tour_joueur = 0;

while (allumettes > 0) {
    if (tour_joueur % 2 == 0) { // 4/2=2 2*2=4 4-4=0 ou 3/2=1.5 1*2=2 3-2=1
        joueur = perso1;
    } else {
        joueur = perso2;
    }
    // console.log(joueur);
    nb_allumettes_a_retirer = prompt('Il reste ' + allumettes + ' allumettes. ' + joueur + ' Combien d\'allumettes vous voulez ?');
    while (nb_allumettes_a_retirer < 1 || nb_allumettes_a_retirer > 3) {
        nb_allumettes_a_retirer = prompt('Il reste ' + allumettes + ' allumettes. ' + joueur + ' Combien d\'allumettes vous voulez ?');
    }
    allumettes = allumettes - nb_allumettes_a_retirer;
    tour_joueur++;
}
alert(joueur + ' a gagné le jeux de nim !');