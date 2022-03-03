let paragraphe = document.createElement('p');
console.log(paragraphe);
let content_paragraphe = document.createTextNode('En voici une ');
console.log(paragraphe);
let lien = document.createElement('a');
lien.href = 'https://fr.wikipedia.org/wiki/Langage_de_programmation';
lien.textContent = 'liste';
console.log(lien);
let content2_paragraphe = document.createTextNode(' plus complète !');

paragraphe.appendChild(content_paragraphe);
paragraphe.appendChild(lien);
paragraphe.appendChild(content2_paragraphe);
console.log(paragraphe);
document.querySelector('#contenu').appendChild(paragraphe);