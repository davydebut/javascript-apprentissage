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
    btn_res = document.getElementById('btn-res');


// tr_prime = tr.cloneNode(true);
// document.body.appendChild(tr_prime);

btnNvl.addEventListener('click', function () { // action bouton
    let crtNvl = document.createElement('tr');
    crtNvl.setAttribute("id", "Ligne" + indexLigne);
    indexLigne++;
    tbody.appendChild(crtNvl);
    // créer la colonne td
    let tdLibelle = document.createElement('td'),
        tdHt = document.createElement('td'),
        tdTva = document.createElement('td'),
        tdTtc = document.createElement('td'),
        tdCalc = document.createElement('td'),
        tdDel = document.createElement('td'),
        tdSprl = document.createElement('td');
    tdLibelle.innerHTML = "<input type='text'>",
        tdHt.innerHTML = "<input type='number'>",
        tdTva.innerHTML = "<select name='taxes' id='taxe-select'><option value='choix'>--Choisir la taxe :--</option><option value='20'>20%</option><option value='5'>5,5%</option></select>",
        tdTtc.innerHTML = "<td></td>",
        tdCalc.innerHTML = "<button class='btn btn-primary' type='submit'>Calculer</button>",
        tdDel.innerHTML = "<button class='btn btn-light' type='reset'>Effacer</button>",
        tdSprl.innerHTML = "<button id='btn-res" + indexLigne + "' class='btn btn-danger' type='reset'>Supprimer</button>";
    crtNvl.appendChild(tdLibelle);
    crtNvl.appendChild(tdHt);
    crtNvl.appendChild(tdTva);
    crtNvl.appendChild(tdTtc);
    crtNvl.appendChild(tdCalc);
    crtNvl.appendChild(tdDel);
    crtNvl.appendChild(tdSprl);
    tdCalc.setAttribute('id', 'btn-calc' + indexLigne);
    tdDel.setAttribute('id', 'btn-del' + indexLigne);
    // tdSprl.setAttribute('id', 'btn-res'+btn_ligne);

})

btnSprl.addEventListener('click', function () {
    // tbody
    let tableauBody = document.getElementsByTagName('tbody')[0];
    // compter combien de tr il reste
    if (tableauBody.querySelectorAll("tr").length > 1) {
        tableauBody.removeChild(tableauBody.lastChild);
        // btnSprl.disabled=true;
    }
})

btnDel.addEventListener('click', function () {
    
})

let tableau = document.getElementsByTagName('table')[0],
    tableauBody = document.getElementsByTagName('tbody')[0],
    tableauLigne = document.getElementsByTagName('tr')[0], // ligne du tableau
    tableauCol = document.getElementsByTagName('td')[0];
console.log(tableauBody);
console.log(tableauLigne);
console.log(tableauCol);
// premier élément du noeud liste des enfants de tableauCol
textCol = tableauCol.childNodes[0];
console.log(textCol);
console.log(tableauBody.children[0]);