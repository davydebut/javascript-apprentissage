// si homme > 20 ans alors paie l'impôt
// si femme > 18 && < 35 alors paie l'impôt
// sinon les autres ne paie pas l'impôt

let ageSaisi,
    genreSaisi,
    bouton = document.getElementById('bouton'),
    message = document.getElementById('message');


function verifierImposition() {
    // récupérer la valeur de l'age et du genre avec la fonction .value
    ageSaisi = document.getElementById('age-saisi').value;
    genreSaisi = document.getElementById('genre-saisi').value;
    // Notre condition : Si âge >= 18 et Homme alors, ou si femme et âge >= 20 et si femme...
    if(genreSaisi == "H" && ageSaisi >= 18){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable</div>';
    }else if((genreSaisi == "F" && ageSaisi >= 20) && (genreSaisi == "F" && ageSaisi <= 35)){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable</div>';
    }else{
        message.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes non imposable !</div>';
    }
}

// Ajout d'un écouteur d'événement sur le bouton qui au click appelera la fonction verifierImposition();
bouton.addEventListener('click', verifierImposition, false);