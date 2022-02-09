// alert("<h2>C'est mon 1er script</h2>");

// document.write("<h2>Mon premier script</h2>");

// var nomExterne = "Hein ";

// function portee(nom) {
//     prenom = "Terieur ";
//     nomGlobale = "Halle ";
//     console.log(window.nomGlobale + nom + prenom);
//     console.log(nomGlobale + nomExterne + prenom);
// }
// portee("Ex ");
// console.log(prenom); // provoque une erreur

// function perimetre() {
//     var perim = 0;
//     var forme = 0;

//     switch (arguments.length) {
//         case 0:
//             return "Il faut un ou plusieurs arguments ...";
//             break;
//         case 1:
//             perim = arguments[0] * 4;
//             forme = "carré";
//             break;
//         case 2:
//             perim = (arguments[0] * 2) + (arguments[1] * 2);
//             forme = "rectangle";
//             break;
//         case 3:
//             perim = arguments[0] + arguments[1] + arguments[2];
//             forme = "triangle";
//             break;
//         default:
//             for (i in arguments) {
//                 perim += arguments[i];
//             };
//             return "Vous avez envoyé " +
//                 arguments.length +
//                 " arguments, leur somme fait : " +
//                 perim;
//     }
//     return "Périmètre : " + perim + ", c'est un : " + forme;
// }

// console.log(perimetre());
// console.log(perimetre(5));
// console.log(perimetre(3,2));
// console.log(perimetre(5,5,5));
// console.log(perimetre(10,5,4,3,5));

// function testerRadio() {
//     var radios = document.getElementsByName('choix');
//     var inputTxt = document.getElementById('txt');
//     for (var i=0; i<radios.length;i++) {
//         if (radios[i].checked) {
//             inputTxt.value = radios[i].value;
//         }
//     };
// };

// // classe c'est des tableau et id juste une variable

// var affichebtn = document.getElementById('affiche');
// var cachebtn = document.getElementById('cache');
// var postit = document.getElementById('postit');
// var souris = document.getElementById('souris');

// affichebtn.addEventListener('click', function () {
//     postit.style.visibility = 'visible';
// });

// cachebtn.addEventListener('click', function () {
//     postit.style.visibility = 'hidden';
// });

// // postit.addEventListener('mouseover', function () {
// //     postit.style.visibility = 'visible';
// // });

// function survol() {
//     postit.style.visibility = 'visible';
//     postit.innerHTML = "« C'est gentil de me survoler... »";
// };

// souris.addEventListener('mouseleave', survol(), function () {
//     postit.style.visibility = 'hidden';
//     postit.innerHTML = "Vous avez cliqué sur le bouton 'Affiche' !";
// });

// // rengelgne le texte voulu dans la div at la vand visible
// function affiche(texte) {
//     document.getElementById('PostIt').innerHTML = texte;
//     document.getElementById('PostIt').style.visibility = "visible";
// };
// // masque la div
// function cache() {
//     document.getElementById('PostIt').style.visibility = "hidden";
// };


// // auto-exécution implémente les handler d'événements

// // bouton cache
// var btnCache = document.getElementById("btncache");
// btnCache.addEventListener("click", cache, false);
// // boutton affiche
// var btnAffiche = document.getElementById("btnaffiche");
// btnAffiche.addEventListener("click", function () {
//     affiche('Vous avez cliqué sur le bouton Affiche')
// }, false);
// // div de texte sensible
// var parTexte = document.getElementById("parTexte");
// parTexte.addEventListener("mouseover", function () {
//     affiche('C\'est gentil de me survoler.')
// }, false);
// parTexte.addEventListener("mouseout", cache, false);

// p.addEventListener('mouseout', survol(), false);

// var bouton1 = document.getElementById('start');
// var bouton2 = document.getElementById('pause');
// var bouton3 = document.getElementById('stop');

// var timer;
// var i = 0;

// bouton1 = new paramTps();
// bouton2 = new paramTps();  


var NouveauExercice;

// quand on récupére byclassname sa renvoie un tableau,alors que si je récup id
// sa renvoie juste une variable, ca fera mois de cassage de tete

// Décortiquons le problème : Penser à pouvoir transformer un exercice en Algorithme,
// dabord en cherchant les variables, ensuite à voir si il y a des formules mathématiques à
// écrire, ensuite créer des conditions pour trouver une première solution à un seul des
// problèmes, ensuite remanier le code grâce aux fonctions afin de le rendre plus lisible
// et plus flexible en cas de changement de données.

// Dans une fonction il y a le nom de la fonction et entre les parenthèses il y a les
// paramétre (on peut on mettre autant qu'on veut) que prend cette fonction ensuite
// entre crochet il y le code à executer, et une fonction peut retourner une valeur
// avec le mot return, par exemple :
// function name (parametre1, parametre2, etc..) {
//          le code à executer;
// le mot clét return (qui donne un resultat à la fonction ->)
//          return parametre1 * parametre2;                                   
// } et ensuite viens l'appel de la fonction par exemple dans le terminal avec un
// console.log : 
// console.log(name(3,3));


let start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    stopChrono = document.getElementById('stop'),
    heure = document.getElementById('h'),
    minute = document.getElementById('m'),
    seconde = document.getElementById('s'),
    secondes = 0,
    minutes = 0,
    heures = 0, //string
    timer;

function chrono() {
    timer = setInterval(chronostart, 1000);
}

function ajouteUnZero(zero) {
    var unZero;
    if (zero < 10) {
        unZero = "0" + zero;
    } else {
        unZero = zero;
    }
    return unZero;
}

function chronostart() {
    secondes++;

    if (secondes == 60) {
        minutes++;
        secondes = 0;
        if (minutes == 60) {
            heures++;
            minutes = 0;
        }
    }
    seconde.innerHTML = ajouteUnZero(secondes);
    minute.innerHTML = ajouteUnZero(minutes);
    heure.innerHTML = ajouteUnZero(heures);
}

start.addEventListener('click', function () {
    chrono()
    pause.style.visibility = 'visible';
    start.style.visibility = 'hidden';
    stopChrono.style.visibility = 'visible';
}, false);

pause.addEventListener('click', function () {
    clearInterval(timer);
});

stopChrono.addEventListener('click', function () {
    secondes = 0;
    minutes = 0;
    heures = 0;
    clearInterval(timer);
    start.style.visibility = 'visible';
    seconde.innerHTML = ajouteUnZero(secondes);
    minute.innerHTML = ajouteUnZero(minutes);
    heure.innerHTML = ajouteUnZero(heures);
});