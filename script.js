var largeur = screen.availWidth
var hauteur = screen.availHeight
var vaisseau = (largeur/2)-110

function redim(){

    document.bgColor="black"
    document.getElementById('space').style.left=(largeur/2)-400+'px'
    document.getElementById('space').style.top=(hauteur/2)-300+'px'
    document.getElementById('spaceship').style.top=(hauteur/2)+72+'px'
    document.getElementById('spaceship').style.left=(largeur/2)-110+'px'

};

function spaceshipMoves(keyCode)
{
    switch(keyCode)
    {
    case 37: bouge(0,-15); break;
    case 39: bouge(15,0); break;

    }
}

function bouge(x,y)
{
    min=(largeur/2)-420
    max=(largeur/2)-400+620


    if(vaisseau<max)
    {
        vaisseau+=x

        document.getElementById('spaceship').style.left=vaisseau +'px'

    }

    if(vaisseau>min)
    {
        vaisseau+=y

        document.getElementById('spaceship').style.left=vaisseau +'px'

    }
}