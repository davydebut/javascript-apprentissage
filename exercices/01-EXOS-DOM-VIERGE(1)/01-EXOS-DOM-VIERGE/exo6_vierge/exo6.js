// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

// console.log(mots[0].terme);
let div = document.querySelector('#contenu');
let dl = document.createElement('dl');

for (let i = 0; i < mots.length; i++) {
    const terme = mots[i].terme;
    console.log(terme);
    let dt = document.createElement('dt');
    dt.textContent = terme;
    dl.appendChild(dt);
    const definition = mots[i].definition;
    console.log(definition);
    let dd = document.createElement('dd');
    dd.textContent = definition;
    dt.appendChild(dd);
}

div.appendChild(dl);
