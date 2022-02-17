class Contact {
    nom
    prenom
    numero_telephone

    constructor(_nom, _prenom, _numero_telephone) {
        this.nom = _nom;
        this.prenom = _prenom;
        this.numero_telephone = _numero_telephone;
    }
    presentation() {
        return this.nom + ' ' + this.prenom + ', ' + this.numero_telephone;
    }
}

let contact1 = new Contact('Sanchez', 'Mathieu', '0102030405');
let contact2 = new Contact('Dupond', 'Jean', '0504030201');
// console.log(contact1);
console.log(contact1.presentation());
let repertoire = [];
repertoire.push(contact1);
repertoire.push(contact2);
console.log(repertoire[0].nom);

// let choix_user = prompt('Faire un choix');

/* while (choix_user != 3) {
    switch (choix_user) {
        case 0:
            for (let i = 0; i < repertoire.length; i++) {
                console.log(repertoire[i].presentation());
            }
            break;
        case 1:
            let nom = prompt('Saisir un nom');
            let prenom = prompt('Saisir un prénom');
            let numero_telephone = prompt('Saisir un numéro de téléphone');
            let contact_a_ajouter = new Contact(nom, prenom, numero_telephone);
            repertoire.push(contact_a_ajouter);
            console.log('Le contact ' + contact_a_ajouter.presentation() + ' à bien été ajouter !');
            for (let i = 0; i < repertoire.length; i++) {
                console.log(repertoire[i].presentation());
            }
            break;
        case 2:
            // splice 
            for (let i = 0; i < repertoire.length; i++) {
                console.log('id : ' + (i + 1) + ': ', repertoire[i].presentation());
            }
            let id_a_supprimer = parseInt(prompt('Saisir l\'id à supprimer'));
            repertoire.splice(id_a_supprimer - 1, 1);
            console.log('Le contact à bien été supprimer !');
            break;
        default:
            break;

    }
    console.log('MENU :');
    console.log('0 : Liste des contacts');
    console.log('1 : Ajouter un contact');
    console.log('2 : Supprimer un contact');
    console.log('3 : Quitter le programme');
    choix_user = prompt('Faire un choix :');
}
 */

for (let i = 0; i < repertoire.length; i++) {
    console.log(repertoire[i].presentation());
}

let nom = 'Olicard'; // prompt('Saisir un nom');
let prenom = 'Fabien'; // prompt('Saisir un prénom');
let numero_telephone = '0403050201'; // prompt('Saisir un numéro de téléphone');
let contact_a_ajouter = new Contact(nom, prenom, numero_telephone);
repertoire.push(contact_a_ajouter);
console.log('Le contact ' + contact_a_ajouter.presentation() + ' à bien été ajouter !');

for (let i = 0; i < repertoire.length; i++) {
    console.log('id : ' + (i + 1) + ' : ' ,repertoire[i].presentation());
}

let id_a_supprimer = 2;
repertoire.splice(id_a_supprimer - 1, 1);
console.log('Le contact à bien été supprimer !');

for (let i = 0; i < repertoire.length; i++) {
    console.log('id : ' + (i + 1) + ' : ' ,repertoire[i].presentation());
}

// console.log('MENU :');
// console.log('0 : Liste des contacts');
// console.log('1 : Ajouter un contact');
// console.log('2 : Supprimer un contact');
// console.log('3 : Quitter le programme');