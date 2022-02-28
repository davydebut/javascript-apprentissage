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

console.log(name_user1.presentation); */
// console.log(name_user1.presentation(), name_user2.presentation());


/*  while (allumettes != 0) {
    if (name_user1.nb_saisi >= 1 && name_user2.nb_saisi <= 3) {
        console.log('il reste ' + allumettes + ' allumettes. ' + name_user1.name + ' combien d\'allumette vous prenez (entre 1 et 3)');
        name_user1.reste;
        console.log(this.nb_saisi, allumettes, this.reste);
        console.log('il reste ' + allumettes + ' allumettes. ' + name_user2.name + ' combien d\'allumette vous prenez (entre 1 et 3)');
        name_user2.reste;
        console.log(name_user2.nb_saisi, allumettes, name_user2.reste);
    }
} */


// il faut que le programme demande à chaque fois aux deux joueurs d'entrez un saisie donc
/* if (nb_saisi >= 1 && nb_saisi <= 3) {
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
    nbrToursJoueur1 = 0,
    nbrToursJoueur2 = 0;

while (allumettes != 0) {

    console.log(nomJoueur1 + ' combien d\'allumettes tu veux prendre entre 1 & 3');
    nb_saisi = 2;

    if (nb_saisi >= 1 && nb_saisi <= 3) {
        allumettes = allumettes - nb_saisi;
        console.log(allumettes);
        nbrToursJoueur1++;
    }

    console.log(nomJoueur2 + ' combien d\'allumettes tu veux prendre entre 1 & 3');
    nb_saisi = 2;

    if (nb_saisi >= 1 && nb_saisi <= 3) {
        allumettes = allumettes - nb_saisi;
        console.log(allumettes);
        nbrToursJoueur2++;
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