var BoiteEnnemis = document.getElementsByClassName('boiteEnnemis')
var direction = 1;
var posXennemis = 0;
var posYennemis = 0;

function interval() {
    intervalID = setInterval(moveAliens, 500);
}

function moveAliens() {

    if (posXennemis == 500) {
        clearInterval()
    }
    else {
        posXennemis++;
    };
}

