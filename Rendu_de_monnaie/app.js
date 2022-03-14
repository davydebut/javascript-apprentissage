let totalSaisi = document.getElementById('total').value,
    monnaieSaisi = document.getElementById('monnaie').value,
    message10 = document.getElementById('message10'),
    message5 = document.getElementById('message5'),
    message1 = document.getElementById('message1'),
    bouton = document.getElementById('button'),
    aRendre;

// aRendre = monnaieSaisi - totalSaisi
// créer une boucle qui incrémente combien de 10 il y a dans aRendre
// while(aRendre >= 10){
//     billet10++;
//     aRendre = aRendre - 10;
// }
// et on fait pareil pour le billet de 5 et la pièce de 1
// Enfin on affiche le résultat du nombre de billet et de pièces

function operation(){
    aRendre = totalSaisi - monnaieSaisi ;
    // aRendre = 150 - 125;
    billet10 = 0;
    billet5 = 0;
    while(aRendre >= 10){
        billet10++;
        aRendre = aRendre - 10;
    }
    while(aRendre >= 5){
        billet5++;
        aRendre = aRendre - 5;
    }
    message10.innerHTML = billet10;
    message5.innerHTML = billet5;
    message1.innerHTML = aRendre;

    // console.log(billet10);
    // console.log(billet5);
    // console.log(aRendre);
}

bouton.addEventListener('click', operation, false);