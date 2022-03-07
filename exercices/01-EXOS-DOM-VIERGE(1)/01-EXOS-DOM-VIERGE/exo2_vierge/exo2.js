// Ecrire la fonction compterElements
function compterElements(selecteur) {
    // votre code ...
    let nbrElmt = document.querySelectorAll(selecteur);
    return nbrElmt.length;
}

// console.log(document.body.childNodes);
console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2