let mots = [
    "embastionnâtes",
    "embarrasseriez",
    "féminiseraient",
    "frictionneriez",
    "chanstiquaient",
    "recondamnasses"
];


let resultaDebog;
let motsLength = mots.length;
let nbTab = aleatoire(motsLength);

function aleatoire(tableau) {
    for (let i = 0; i < mots.length; i++) {
        console.log(mots[i]);
    }
    return Math.floor(Math.random() * Math.floor(tableau));
}

console.log(nbTab);

function afficherTexte(valeur) { // la valeur c'est l'index aléatoire du tableau
    return valeur;
}

let motsTrouver = afficherTexte(mots[nbTab]);
console.log(motsTrouver);
let majuscule = motsTrouver.toUpperCase();
console.log(majuscule);

let motCoupe = majuscule.split("");
console.log(motCoupe);

let reponseli = document.querySelectorAll(".reponse"),
    motcache = document.getElementsByClassName('motcache'); // span
console.log(reponseli);
console.log(motcache);

for (let i = 0; i < reponseli.length; i++) {
    motcache[i].innerHTML = motCoupe[i];
    console.log(motCoupe[i]);
    motcache[i].classList.add('invisible');
}

let bouton = document.getElementsByTagName('button'),
    tentative = document.getElementById('tentative'),
    reponseMot = document.getElementById('reponseMot'),
    colorDiv = document.getElementById('color'),
    nombre = 9;
console.log(bouton);

for (let i = 0; i < bouton.length; i++) { // su chaque buton faire un event faire compraraison
    bouton[i].addEventListener('click', function () {
        bouton[i].disabled = true;
        /* if(bouton[i].innerHTML == motcache[i]){
            motcache[i].classList.remove('invisible');
        } */
        for (let j = 0; j < motCoupe.length; j++) {
            if (motCoupe[j] == bouton[i].textContent) {
                console.log('Match !');
                console.log(j);
                motcache[j].classList.remove('invisible');
                reponseli[j].firstChild.nodeValue = "";

            } else {
                console.log('c\'est pas bon !');
            }
        }
        if (!majuscule.includes(bouton[i].textContent)) {
            nombre--;
            tentative.innerHTML = nombre;
            console.log('hehe ca marche pas', nombre);

            switch (nombre) {
                case 6:
                    colorDiv.classList.remove('bg-success');
                    colorDiv.classList.add('bg-warning');
                    break;
                case 3:
                    colorDiv.classList.remove('bg-warning');
                    colorDiv.classList.add('bg-danger');
                    break;
                case 0:
                    for (let k = 0; k < bouton.length; k++) {
                        bouton[k].disabled = true;
                    }
                    reponseMot.innerHTML = '<p>La réponse est : '+majuscule+'</p>'
                    break;
            }
        }

    })

}


// function separer les mots en lettre 0 = 1er lettre