/*
 Exercice : afficher l'enfant d'un objet du DOM
*/

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);
// Doit afficher le second li du ul
afficherEnfant(document.body.children[2].children[0], 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.head, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 9);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    // VERIFIE QUE LE TYPE DE NOEUD EST OK (SI NOEUD DE TYPE TEXTUEL OU COMMENT ALORS ERREUR)
    if (noeud.nodeType == 3 || noeud.nodeType == 8){
        // erreur type de noeud incorrect
        return console.error('Type de noeud incorrect !');
    }
    let nbEnfants = noeud.childNodes.length;
    if (indice < 0 || indice > nbEnfants) {
        // erreur indice incorrect
        return console.error('Indice incorrect !');
    }
    console.log(noeud.childNodes[indice]);
    // 1er appel : afficherEnfant(document.body, 1) = document.body.childNodes[1]
    // 2nd appel : afficherEnfant(document.body.children[2].children[0], 1) = document.body.children[2].children[0].childNodes[1]
}