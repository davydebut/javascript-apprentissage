let div = document.getElementsByTagName('div');
console.log(div[0]);

let couleurDeFond = "grey", // prompt("Quelle couleur de fond voulez-vous ? :");
    couleurTexte = "yellow";

for (let i = 0; i < div.length; i++) {
    const element = div[i];
    div[i].style.backgroundColor = couleurDeFond;
    div[i].style.color = couleurTexte;
}