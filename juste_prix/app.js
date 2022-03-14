/*
Le jeu doit afficher de façon aléatoire le nom et l'image de l'objet à
trouver (5 objets de votre choix). afficher n'importe quel image.

Le prix de l'objet est fixé de façon aléatoire dans une fourchette allant
de 1 à 100 euros.

Une partie comporte 10 tentatives.

Afficher un message en cas de victoire ou d'échec.

Vous pouvez customiser le message de fin avec son, image, ou vidéo...
*/

let nomObjet = [ //nomObjet[3]=guitare; nomObjet&imageObjet[aleatoire=3];
        'Chaise',
        'Un costume d\'Halloween',
        'Un barbecue',
        'Une guitare',
        'Un sac à main'
    ],
    imageObjet = [
        'chaise.png',
        'costume-haloween.png',
        'grill.png',
        'guitare.png',
        'sac-a-main.png'
    ],
    prixPopose,
    prixMystere,
    nbreAleatoire,
    compteurTentative,
    image = document.getElementById('objet'),
    nomImage = document.getElementById('nom-objet'),
    bouton = document.getElementById('bouton'),
    message = document.getElementById('message'),
    affichageTentative = document.getElementById('nbre-tentative'),
    resultatDebog;

function genererUnChiffre(valeurMax) {
    return resultatDebog = Math.floor(Math.random() * Math.floor(valeurMax));
    // nombre aléatoire multiplié par le nombre maximum
    // soit du prix (valeurMax = 100) ou du tableau (valeurMax = 5)
}

// console.log(typeof resultatDebog); // exemple = 78 pour le prix mystere ou 2 pour le tableau
prixMystere = genererUnChiffre(100) + 1; // exemple = 78+1=79
nbreAleatoire = genererUnChiffre(5); // exemple = 2

function afficherImage(valeur) { // la valeur c'est l'index aléatoire du tableau
    return '<img src="./img/' + valeur + '"class="img-fluid" width="30%" alt="Responsive image">';
}
image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];
compteurTentative = 10;
affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";

function verifierProposition() {
    prixPopose = document.getElementById('prix-propose').value;
    if (compteurTentative == 0) {
        affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";
        message.innerHTML = "Désolé, vous avez perdu !<br> Le juste prix était de " + prixMystere + " euros";
        bouton.disabled = true;
    } else {
        if (prixPopose > prixMystere) {
            message.innerHTML = "c'est moins !";
            compteurTentative--;
            affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";
        }
        if (prixPopose < prixMystere) {
            message.innerHTML = "c'est plus !";
            compteurTentative--;
            affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";
        }
        if (prixPopose == prixMystere) {
            message.innerHTML = "Bravo vous avez gangé !";
            affichageTentative.innerHTML = "En " + compteurTentative + " tentavies...";
            bouton.disabled = true;
        }
    }
}
bouton.addEventListener('click', verifierProposition, false);