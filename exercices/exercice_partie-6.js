// exo 1
let temp = // Number(prompt('Entrez la température de l\'eau :'));
Compare(temp);

function Compare(temp) {
    if (temp >= 0 && temp <= 100) {
        console.log('Elle est liquide ! la température est de : ' + temp + '° celsius et est supérieur à 0° celsius.');
    } else if (temp <= 0) {
        console.log('Elle est solide ! c\'est de la glace, la température est de : ' + temp+'° celsius');
    } else if (temp >= 100 && temp <= 11000) {
        console.log('Elle est vapeur ! la température est de : ' + temp + '° celsius et est supérieur à 100° celsius.');
    }else{
        console.log('C\'est du plasma ! à cette température de : '+temp+'° celsius');
    }
}