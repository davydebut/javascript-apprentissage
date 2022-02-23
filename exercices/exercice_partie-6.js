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
// fin exo 2 */