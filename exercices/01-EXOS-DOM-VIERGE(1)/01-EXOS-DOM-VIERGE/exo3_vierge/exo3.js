let id = document.querySelectorAll("[id]");
let classAttr = document.querySelectorAll("[id]");
console.log(id, id.length);
// console.log(id[0].attributes[0].textContent);

function infosLiens() {
    // votre code ...
    let liens = document.querySelectorAll("a");
    console.log(liens.length);
    console.log(liens[0], liens[liens.length - 1]);
}

for (let key of id.values(id)) {
    console.log(key);
    let nameId = key.attributes[0];
    console.log(nameId);
}

function possede(_id, _class) {
    // votre code ...
    
}

infosLiens();

console.log(possede("saxophone", "bois")); // Doit afficher true
console.log(possede("saxophone", "cuivre")); // Doit afficher false
console.log(possede("trompette", "cuivre")); // Doit afficher true
console.log(possede("contrebasse", "cordes")); // Doit afficher une erreur