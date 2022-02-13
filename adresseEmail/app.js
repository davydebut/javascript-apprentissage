let bouton = document.querySelector('button'),
    message = document.querySelector('#message'),
    input, 
    positionArobase,
    positionCoupe;

function control(event) {

    input = document.getElementById('analyse').value;

    // console.log(event);

    if (input.includes('@') && input.includes('.')) {
        positionArobase = input.indexOf('@');
        positionCoupe = input.substring(positionArobase);
        if (positionCoupe.includes('.')) {
            message.innerHTML = '<span class="text-success">Adresse email valide !</span>';
        } else {
            message.innerHTML = '<span class="text-danger">Adresse email invalide !</span>';
        }
    } else {
        message.innerHTML = '<span class="text-danger">Adresse email invalide !</span>';
    }
}

bouton.addEventListener('click', control, false);

// console.log(input.indexOf('@'));