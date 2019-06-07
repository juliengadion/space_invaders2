var Int = setInterval('moveAliens()', 1000);

var screen = ('screen');
var alien = ('alien');
var posXalien = alien.height();
var posYalien = alien.width();
var posXscreen = screen.innerHeight();
var posYscreen = screen.innerWidth();

function moveAliens() {

    if (posXalien < posXscreen) {
        posXalien = posXalien+1;
    }

    else {
        posXalien = posXalien-1;
    }

};

clearInterval(Int);