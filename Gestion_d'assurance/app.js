/* Algorithme : 
assure au tarif rouge
Si age < 25 && permis < 2 , seulement si accident = 0,
Sinon refus d'assurer

assure tarif orange
Si < 25 && > 2 || > 25 && < 2 , seulement si accident = 0
et si accident = 1 alors tarif rouge

assure tarif vert
Si > 25 && > 2 , seulement si accident = 0
&& accident = 1 beneficie tarif orange
&& accident = 2 beneficie tarif rouge,
sinon refusé au-delà

si > 1 dans la compagnie assurance = contrat couleur aventageuse bleu

Ne pas oublier le :
    <!-- message.innerHTML = '<div class="alert alert-danger" role="alert">Assuré au tarif ...</div>';
        message.innerHTML = '<div class="alert alert-success" role="alert">Refus</div>'; -->
*/

let bouton = document.querySelector('button'),
    message = document.querySelector('#message'),
    accident = document.querySelector('#accident').value,
    fidelite = document.querySelector('#fidelite').value,
    permis = document.querySelector('#permis').value,
    age = document.querySelector('#age').value;

// let age, permis, fidelite, accident; (Debogage)

function situation() {

    if ((accident == 0) && (age < 25 && permis < 2)) {
        // console.log('Assuré au tarifs rouge');
        message.innerHTML = 'div class="alert alert-danger" role="alert">Assuré au tarif rouge</div>';
    } else if ((accident == 0) && (age < 25 && permis > 2) || (age > 25 && permis < 2)) {
        // console.log('Assuré au tarifs orange');
        message.innerHTML = 'div class="alert alert-warning" role="alert">Assuré au tarif orange</div>';
    } else if (accident == 1) {
        // console.log('Assuré au tarifs rouge');
        message.innerHTML = 'div class="alert alert-danger" role="alert">Assuré au tarif rouge</div>';
    } else if ((accident == 0) && (age > 25 && permis > 2)) {
        // console.log('Assuré au tarifs vert');
        message.innerHTML = 'div class="alert alert-success" role="alert">Assuré au tarif vert</div>';
    } else if (accident == 1) {
        // console.log('Assuré au tarifs orange');
        message.innerHTML = 'div class="alert alert-warning" role="alert">Assuré au tarif orange</div>';
    } else if (accident == 2) {
        // console.log('Assuré au tarifs rouge');
        message.innerHTML = 'div class="alert alert-danger" role="alert">Assuré au tarif rouge</div>';
    } else if (fidelite > 1 && accident == 0) {
        // console.log('Assuré au tarifs bleu');
        message.innerHTML = 'div class="alert alert-primary" role="alert">Assuré au tarif bleu</div>';
    } else {
        // console.log('Refus');
        message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>'
    }
}

bouton.addEventListener('click', situation, false);

// console.log(situation(26, 6, 2, 0)); (Debogage)

// 925€ / 2 ce mois ci + 903€