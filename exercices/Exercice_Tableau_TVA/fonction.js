// Fonctionnalités générales : écrite dans des fonctions, n'oublie pas de penser que tout
// est une boite avec d'autre boites a l'intérieur rappel toi

let indexLigne = 2;

// en premier créer 3 boutons

let btnNvl = document.getElementById('nvl'),
    btnSprl = document.getElementById('sprl'),
    btnDel = document.getElementById('del'),
    btnCalc = document.getElementById('calc');

// Ajouter une ligne (clone la prmière ligne sans les valeurs et l'ajoute à la suite)
// var dupNode = node.cloneNode([deep]); => .clone()
/* node
Le noeud à dupliquer.
                                            Exemple
                                            p = document.getElementById("para1");
                                            p_prime = p.cloneNode(true);
dupNode
Le nouveau noeud qui sera un clone du node.

deep Facultatif (profondeur)
true (vrai) si les enfants du noeud doivent aussi 
être clonés ou false (faux) si seul le noeud spécifié doit l'être. */

let trlgn1 = document.getElementById("ligne1"),
    tbody = document.getElementsByTagName('tbody')[0],
    // récupérer les boutons du tableau

    btn_calc = document.getElementById('btn-calc'),
    btn_del = document.getElementById('btn-del'),
    btn_res = document.getElementById('btn-res'),
    tableauBody = document.querySelector('#tbodyId');



// tr_prime = tr.cloneNode(true);
// document.body.appendChild(tr_prime);

btnNvl.addEventListener('click', function () { // action bouton
    let crtNvl = document.createElement('tr');
    crtNvl.setAttribute("class", "Ligne");
    tbody.appendChild(crtNvl);
    // créer la colonne td
    let tdLibelle = document.createElement('td'),
        tdHt = document.createElement('td'),
        tdTva = document.createElement('td'),
        tdTtc = document.createElement('td'),
        tdCalc = document.createElement('td'),
        tdDel = document.createElement('td'),
        tdSprl = document.createElement('td');
    tdLibelle.innerHTML = "<input type='text' class='inside'>",
        tdHt.innerHTML = "<input type='number' class='prixInside'>",
        tdTva.innerHTML = "<select name='taxes' class='taxes'><option value='choix'>--Choisir la taxe :--</option><option value='1'>15%</option><option value='2'>5,5%</option></select>",
        tdTtc.innerHTML = "<td></td>",
        tdCalc.innerHTML = "<button class='btn btn-primary calculer' type='submit'>Calculer</button>",
        tdDel.innerHTML = "<button class='btn btn-light effacer' type='reset'>Effacer</button>",
        tdSprl.innerHTML = "<button id='btn-res' class='btn btn-danger supprimer' type='reset'>Supprimer</button>";
    crtNvl.appendChild(tdLibelle);
    crtNvl.appendChild(tdHt);
    crtNvl.appendChild(tdTva);
    crtNvl.appendChild(tdTtc);
    crtNvl.appendChild(tdCalc);
    crtNvl.appendChild(tdDel);
    crtNvl.appendChild(tdSprl);
    tdDel.setAttribute('id', 'btn-del');
    // tdSprl.setAttribute('id', 'btn-res'+btn_ligne);
    tdTtc.setAttribute('class', 'ttc');
    // console.log(crtNvl);

    let petitEffacer = document.getElementsByClassName('effacer');
    // console.log(petitEffacer);
    let classeEffacer = document.getElementsByClassName("inside");
    // console.log(classeEffacer);
    let classeEffacer1 = document.getElementsByClassName("prixInside");
    for (let i = 0; i < classeEffacer.length; i++) {
        petitEffacer[i].addEventListener('click', function () {
            classeEffacer[i].value = "";
            classeEffacer1[i].value = "";
        })
    }

    let ligneTr = document.querySelectorAll('.Ligne');
    let supprimer = document.getElementsByClassName('supprimer');
    // console.log(supprimer);
    // console.log(ligneTr);

    for (let i = 0; i < classeEffacer.length; i++) {
        // console.log(supprimer[i]);
        supprimer[i].addEventListener('click', function () {

            /* let cible = e.target.parentElement.parentElement;
            let bouton = 
            console.log(cible);
            cible.remove(); */
            tableauBody.removeChild(ligneTr[i]);
        })
    }

    let pbc = document.querySelectorAll('.calculer');
    console.log(pbc);

    for (let i = 0; i < classeEffacer.length; i++) {
        console.log(tableauBody[i]);
        pbc[i].addEventListener('click', function () {
            let prixTtc = document.querySelectorAll('.ttc');
            let inputCalcul = document.getElementsByClassName("prixInside")[i];
            console.log(inputCalcul);
            let selectCalcul = document.getElementsByClassName('taxes')[i].options[document.getElementsByClassName('taxes')[i].selectedIndex].value;
            console.log(selectCalcul);
            console.log(typeof selectCalcul);
            if (selectCalcul == '1') {
               let resultat = inputCalcul.value / 100;
            //    console.log(resultat);
                resultat = resultat * 20;
                let calculValue = parseInt(inputCalcul.value);
                let multiple = resultat + calculValue;
                prixTtc[i].textContent = multiple;
                console.log(resultat);
            }
            
        })

    }

    // console.log(tableauBody.children);
})



btnSprl.addEventListener('click', function () {
    // tbody
    let tableauBody = document.getElementsByTagName('tbody')[0];
    // compter combien de tr il reste
    if (tableauBody.querySelectorAll("tr").length > 1) {
        tableauBody.removeChild(tableauBody.lastChild);
    }
    if (tableauBody.querySelectorAll('tr').length < 2) {
        btnSprl.disabled = true
    }
})

btnDel.addEventListener('click', function () {
    let classeEffacer = document.getElementsByClassName("inside");
    let classeEffacer1 = document.getElementsByClassName("prixInside");
    console.log(classeEffacer);
    console.log(classeEffacer1);
    // noeud à chercher dans l'arborescence du DOM pour modifier contenu input
    for (let i = 0; i < classeEffacer.length; i++) {
        classeEffacer[i].value = "";
        classeEffacer1[i].value = "";
        // console.log(tableauCol[i]);
        //    console.log(tableauCol[i].children[0].value);
        /* let effacer1 = classeEffacer[i].children[0].attributes[1].value,
            effacer2 = classeEffacer[i].children[0].attributes[1].value;
        classeEffacer[i].children[0].attributes[1].value = "";
        classeEffacer[i].children[0].attributes[1].value = "";
        console.log(effacer1);
        console.log(effacer2); */
    }
    // console.log(tableauCol[0].children[0].attributes[1].value);
    // console.log(tableauCol[1].children[0].attributes[1].value);

})


/* let tableau = document.getElementsByTagName('table')[0],
    tableauBody = document.getElementsByTagName('tbody')[0],
    tableauLigne = document.getElementsByTagName('tr')[0], // ligne du tableau
    tableauCol = document.getElementsByTagName('td');
console.log(tableauBody.children.length);
console.log(tableauLigne.children);
console.log(tableauCol);
// premier élément du noeud liste des enfants de tableauCol
textCol = tableauCol.childNodes;
console.log(textCol);
console.log(tableauBody.children[0].children[0].childNodes[0].textContent);
// [0]childNodes[0].textContent
console.log(btnSprl.classList);

console.log(tableauCol[0].children[0].value); */