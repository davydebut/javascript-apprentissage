// 1.
document.body.childNodes[1].textContent = 'Rick Astley - Never Gonna Give You Up';
// 2.
let enfantCouplet = document.querySelectorAll('.couplet')[0].childNodes[0];
enfantCouplet.remove(); // ici pour la phrase
enfantCouplet.remove(); // ici pour le BR
// 3.
let refrains = document.querySelectorAll('.refrain');
for (let i = 0; i < refrains.length; i++) {
    let enfants = refrains[i].childNodes;
    // console.log(enfants);
    for (let j = 0; j < enfants.length; j++) {
        if (enfants[j].nodeType == 3) {
            if (enfants[j].textContent == enfants[j+2].textContent){
                console.log(enfants[j]);
                enfants[j].remove(); // DELETE TEXTE
                enfants[j].remove(); // DELETE BR
            }
        }
    }
}
// 4.

// 5.
