let contenu = document.getElementById("contenu");
let ul = document.createElement('ul');
let dimensions = {
    "Hauteur": contenu.getBoundingClientRect().height,
    "Largeur": contenu.getBoundingClientRect().width
};


for (const key in dimensions) {
    console.log(dimensions[key]);
    let li = document.createElement('li');
    li.textContent = key + ' : ' + dimensions[key];
    ul.appendChild(li);
}
contenu.appendChild(ul);

// console.log(dimensions);

// li = document.createElement('li');
// li.textContent = dimensions[i];
// console.log(li);
// paragraphe.appendChild(li);

// contenu.appendChild(paragraphe);