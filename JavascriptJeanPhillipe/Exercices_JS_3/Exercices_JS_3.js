// Exercice 10 : Interagir avec le DOM

/* let p = document.getElementsByTagName('p'),
a = document.getElementsByTagName('a'),
para = document.getElementById('para'),
pNodes;

for (let i = 0; i < p.length; i++) {
    pNodes = p[i].childNodes[0].nodeValue;
    console.log(pNodes);
}

a[1].href = a[0].href;
a[0].href = "https://www.developpez.com/";
a[0].target = "_blank";

para.style.color = "blue";

console.log(a);
// console.log(pNodes); */

// Exercice 11 : évènements avec onclick

/* let boutonBleu = document.getElementById('btnTitle'),
    titre = document.getElementsByTagName('h1'),
    boutonShow = document.getElementById('btnImg'),
    imageCache = document.getElementById('image');

boutonBleu.addEventListener('click', function () {
    titre[0].style.color = "blue";
})

boutonShow.addEventListener('click', function(){
    imageCache.style.display = "block";
}) */

// Exercice 12 : Déplacer un élément

// survol de la souris = pseudo class hover

let blockOrange = document.getElementById('block');

console.log(blockOrange);

blockOrange.addEventListener('mouseover', function () {
    blockOrange.style.left = blockOrange.offsetLeft + 100 + 'px';
    console.log(blockOrange.offsetLeft);

})