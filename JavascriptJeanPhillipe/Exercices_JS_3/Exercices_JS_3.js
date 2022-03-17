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

let blockOrange = document.getElementById('block'),
    body = document.getElementsByTagName('body')[0];

console.log(blockOrange);

blockOrange.addEventListener('mouseover', function () {
    blockOrange.style.left = blockOrange.offsetLeft + 100 + 'px';
    console.log(blockOrange.offsetLeft);
    if (blockOrange.offsetLeft > window.innerWidth) {
        console.log('Vous êtes sortie !');
        let h1 = document.createElement('h1');
        h1.textContent = "Vous êtes sortie !";
        body.appendChild(h1);
        let boutoninit = document.createElement('button');
        boutoninit.setAttribute('class', 'init');
        boutoninit.textContent = "réinitialisation";
        body.appendChild(boutoninit);
        let boutoninit2 = document.querySelector('.init');
        boutoninit2.addEventListener('click', function () {
            console.log('coucou');
            location.reload();
        })
        boutoninit2.addEventListener('mousedown', function(){
            boutoninit.textContent = "Vous êtes prêts ?, attention ; 1 . 2 ... 3 ! Go !!!!!!!!!!!!!!!!!!!!!!!!!!!";
            console.log();
        })
    }
})