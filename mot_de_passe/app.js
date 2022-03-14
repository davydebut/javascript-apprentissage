let mdpSaisi,
    regexMaj = new RegExp("[A-Z]"),
    regexMin = new RegExp("[a-z]"),
    regexChiffre = new RegExp("[0-9]"),
    regexSpecial = new RegExp("[\\W+]"),
    compteur,
    message = document.querySelector('#message');

function verifierProposition() {
    compteur = 0;
    mdpSaisi = document.getElementById("mdp").value;
    // console.log(mdpSaisi);

    if (regexMaj.test(mdpSaisi)) {
        compteur++;
    }
    if (regexMin.test(mdpSaisi)) {
        compteur++;
    }
    if (regexChiffre.test(mdpSaisi)) {
        compteur++;
    }
    if (regexSpecial.test(mdpSaisi)) {
        compteur++;
    }
    if (mdpSaisi.length < 8) {
        compteur--;
    }

    switch (compteur) {
        case 4:
            message.innerHTML = '<span class="text-success">Très sécurisé !</span>';
            break;
        case 3:
            message.innerHTML = '<span class="text-success">Sécurisé !</span>';
            break;
        case 2:
            message.innerHTML = '<span class="text-warning">Moyen !</span>';
            break;
        case 1:
            message.innerHTML = '<span class="text-danger">Dangereux !!</span>';
            break;
        case 0:
            message.innerHTML = '<span class="text-danger">Très Dangereux !!</span>';
            break;
            default:
                message.innerHTML = '<span>Saisissez un mot de passe</span>';
    }
}

document.querySelector('#mdp').addEventListener('keyup', verifierProposition,false);