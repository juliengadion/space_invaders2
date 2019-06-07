const screen_width = document.getElementById('screen');
const screen_height = document.getElementById('screen');

var alien = document.getElementById('alien');
var alienLeft = document.getElementById('alien');
var alienUp = document.getElementById('alien');

setInterval(moveAliens(), 500);

function moveAliens() {

    if (alienLeft < screen_width)
        alienLeft++;

    else {
        alienLeft--;
    }

};