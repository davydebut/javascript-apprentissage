let nbrePhotocopie,
    prixTotal,
    bouton = document.getElementById('bouton'),
    message = document.getElementById('message');

function effectuerCalcul(){
    nbrePhotocopie = document.getElementById('valeur-saisie').value;

    if(nbrePhotocopie <= 10){
        prixTotal = nbrePhotocopie * 0.1;
    }else if(nbrePhotocopie <= 30){
        prixTotal = nbrePhotocopie * 0.1 + (nbrePhotocopie - 10) * 0.09;
    }else{
        prixTotal = nbrePhotocopie * 0.1 + 20 * 0.09 + (nbrePhotocopie - 30) * 0.08;
    }

    message.innerHTML = "Le prix total est de : " + prixTotal + " euros";
}

bouton.addEventListener('click', effectuerCalcul, false);