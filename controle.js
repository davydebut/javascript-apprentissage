let controleText = document.getElementById('controleText'),
    controleBtn = document.getElementById('controle');

controleBtn.addEventListener('click', function () {
    if (controleText.value.length < 2) {
        alert('La chaine doit comporter au moins 2 caractères.');
    } else {
        alert('Vous avez saisie ' + controleText.value);
    }
})