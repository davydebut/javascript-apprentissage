// function getValue() {
//     console.log(inputnb);
// }

// page2.addEventListener('click', function () {
//     nombre = document.getElementById('nombre').value;
//     document.location.assign("http://127.0.0.1:5500/passage%20d'information/page2.html");
// }, false);

// // let object = {propertyname: propertyvalue, method: function(){}};

// // function contructeur
// function Boite(nomobjet, couleurobjet, etc) {
//     this.name = nomobjet; //propriété name, et this c'est l'instance
//     this.color = couleurobjet;
// }

// // utiliser cette fonction pour créer les objets
// let petiteBoite = new Boite("nombre");

function maFonction() {
    let nombre = document.getElementById('nombre').value;
    let texte = document.getElementById('texte').value;

    location.replace(encodeURI("page2.html?t=" + texte + "&n=" + nombre));

};

var infos = (decodeURI(location.href).split("?"))[1];
var tab = infos.split("&n");

var txt = decodeURI((tab[0].split("="))[1]);
var number = decodeURI((tab[1].split("="))[1]);
document.getElementById('recu').innerHTML = "Texte : " + txt + "<br/>Nombre : " + number;

console.log(txt);
console.log(number);