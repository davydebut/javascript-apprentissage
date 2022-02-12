let heure,
    minute,
    seconde,
    valeurModifie;
    bouton = document.getElementById('bouton'),
    message = document.getElementById('message');

function afficheHeure(){
    heure = parseInt(document.getElementById('H').value);
    minute = parseInt(document.getElementById('M').value);
    seconde = parseInt(document.getElementById('S').value);

    seconde = seconde + 1;
    if(seconde == 60){
        seconde = "00";
        minute = minute + 1;
    }
    if(minute == 60){
        minute = "00";
        heure = heure + 1;
    }
    if(heure == 24){
        heure = "00";
    }

    valeurModifie = heure + 'h' + minute + 'min' + seconde + 'secondes';
    message.innerHTML = valeurModifie;
}

bouton.addEventListener('click', afficheHeure, false);