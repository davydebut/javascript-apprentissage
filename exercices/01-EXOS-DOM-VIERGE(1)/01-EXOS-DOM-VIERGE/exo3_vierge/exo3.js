function infosLiens() {
    // votre code ...
    let liens = document.querySelectorAll("a");
    console.log(liens.length);
    console.log(liens[0], liens[liens.length - 1]);
}

function possede(_id, _class) {
    // votre code ...
    let elementMusique = document.getElementById(_id);
    // console.log(elementMusique); // il récupère ce qui a dans le html pour la balise dans le li l'id
    // console.log(_id); // il récupère ce qu'il y a entre paramètre dans la fonction
    if (elementMusique != null && elementMusique != undefined) {
        return elementMusique.classList.contains(_class);
    } else {
        return "Aucun élément ne possède l'identifiant."
    }
}

infosLiens();

console.log(possede("saxophone", "bois")); // Doit afficher true
console.log(possede("saxophone", "cuivre")); // Doit afficher false
console.log(possede("trompette", "cuivre")); // Doit afficher true
console.log(possede("contrebasse", "cordes")); // Doit afficher une erreur

/* for (let key of id.values(id)) {
        console.log(key);
        let nameId = key.attributes[0].value;
        console.log(nameId);
        if(nameId != ""){
            console.log(true);
        } else {
            console.log(false);
        }
    } */