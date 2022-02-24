/* // exo 1
let temp = // Number(prompt('Entrez la température de l\'eau :'));
    Compare(temp);

function Compare(temp) {
    if (temp >= 0 && temp <= 100) {
        console.log('Elle est liquide ! la température est de : ' + temp + '° celsius et est supérieur à 0° celsius.');
    } else if (temp <= 0) {
        console.log('Elle est solide ! c\'est de la glace, la température est de : ' + temp + '° celsius');
    } else if (temp >= 100 && temp <= 11000) {
        console.log('Elle est vapeur ! la température est de : ' + temp + '° celsius et est supérieur à 100° celsius.');
    } else {
        console.log('C\'est du plasma ! à cette température de : ' + temp + '° celsius');
    }
}
// fin exo 1

// exo 2
let nb_photocopie_user = 21, //prompt('Combien de photocopie voulez-vous ? :');
    somme = 0;

switch (true) {
    case nb_photocopie_user <= 10:
        somme = nb_photocopie_user * 0.10;
        console.log('ça fera : ' + somme + ' € pour : ' + nb_photocopie_user + ' photocopie.');
        break;
    case nb_photocopie_user >= 11 && nb_photocopie_user <= 20:
        somme = nb_photocopie_user * 0.09;
        console.log('ça fera : ' + somme + ' € pour : ' + nb_photocopie_user + ' photocopie.');
        break;
    case nb_photocopie_user > 20:
        somme = nb_photocopie_user * 0.08;
        console.log('ça fera : ' + somme + ' € pour : ' + nb_photocopie_user + ' photocopie.');
        break;
    default:
        break;
}
// fin exo 2

// exo 3

let age_user = 29 // prompt('Entrez votre âge :'),
sexe_user = 'homme'; // prompt('Entrez votre genre :');

switch (true) {
    case sexe_user == 'homme' && age_user >= 20:
        console.log('Vous êtes imposable ! vous êtes un ' + sexe_user + ' et vous avez ' + age_user + ' ans');
        break;
    case sexe_user == 'femme' && age_user >= 18 && age_user <= 35:
        console.log('Vous êtes imposable ! vous êtes un ' + sexe_user + ' et vous avez ' + age_user + ' ans');
        break;
    default:
        console.log('Vous êtes non-imposable ! vous êtes un ' + sexe_user + ' et vous avez ' + age_user + ' ans');
        break;
}
// fin exo 3 

// exo 4

function assuré() {
    let age_user = 25, // prompt('Entrez votre âge :'),
        annee_permis = 2, // prompt('Entrez combien de temps avez vous le permis :'),
        fidelite = 5, // prompt('Combien d\'année êtes-vous assuré ? :'),
        accident = 1, // prompt('Combien d\'accident avez-vous fait ?'),
        compteur = 0;

    if (accident >= 3) {
        console.log('Refusé !');
    } else {
        if (age_user > 25) {
            compteur++;
        }
        if (annee_permis > 2) {
            compteur++;
        }
        if (fidelite >= 5) {
            compteur++;
        }
        compteur = compteur - accident;
        console.log(compteur);
    }

    switch (compteur) {
        case 3:
            console.log('Assuré au tarif bleu !');
            break;
        case 2:
            console.log('Assuré au tarif vert !');
            break;
        case 1:
            console.log('Assuré au tarif orange !');
            break;
        case 0:
            console.log('Assuré au tarif rouge !');
            break;
        case -1:
            console.log('Refusé !');
            break;
        default:
            break;
    }
}

assuré();
// fin exo 4

// exo 5

let a = 1,
    A,
    b = 2,
    B,
    c = 3,
    C;

B = a;
C = b;
A = c;
console.log(A, B, C);

// ou alors 

b = a;
c = b;
a = c;
console.log(a, b, c);

// fin exo 5

// exo 6

let euros_user = 5, // prompt('Entrez une valeur en euros :');
    dollars = 1.22,
    roubles = 91.14,
    yuans = 7.89,
    livres = 0.89;

dollars = euros_user * dollars;
console.log(euros_user + '€ convertis en dollars : ' + dollars + '$');
roubles = euros_user * roubles;
console.log(euros_user + '€ convertis en roubles : ' + roubles + ' Roubles');
yuans = euros_user * yuans;
console.log(euros_user + '€ convertis en yuans : ' + yuans + ' Yuans');
livres = euros_user * livres;
console.log(euros_user + '€ convertis en Livres : ' + livres + ' Livres');
// fin exo 6 */