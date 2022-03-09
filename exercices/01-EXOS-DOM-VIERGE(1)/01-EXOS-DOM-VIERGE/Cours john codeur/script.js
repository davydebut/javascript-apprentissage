window.onload = function () {
    // Propagation des événements dabord les enfants et ensuite les parents
    const parent = document.querySelector('#parent');
    const enfant = document.querySelector('#enfant');

    enfant.addEventListener('click', enfantfonction);
    parent.addEventListener('click', parentfonction);

    function enfantfonction(event) {
        console.log("Clic sur Enfant !");
    }

    function parentfonction(event) {
        console.log("Clic sur Parent !");
    }

    // et le contraire donc les parents puis les enfants faut
    // rajouter true à l'événement

    enfant.addEventListener('click', enfantfonction, true);
    parent.addEventListener('click', parentfonction, true);

    // astuce pour savoir les propriété du dom d'un élément
    // pour connaitre les propriétés et méthodes

    console.log(document.body.children[0].children);

}