javascript:(
/* Random_Positions_for_a_Circle.js */
function()
{
    function createCircle()
    {
        let circle = document.createElement("div");
        circle.id = "circle";
        circle.style.position = "absolute";
        circle.style.width = "20px";
        circle.style.height = "20px";
        circle.style.background = "aqua";
        circle.style.borderRadius = "50%";
        document.body.append(circle);
        return circle;
    }

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    function moveObject(whichObject)
    {
        let pos = getRandomPosition();
        whichObject.style.left = pos.x + "px";
        whichObject.style.top = pos.y + "px";
    }

    function moveObjectRandomPositions()
    {
        let circle = createCircle();

        /* move every 1 second */
        setInterval(function()
        {
            moveObject(circle);
        }, 1000);
    }

    moveObjectRandomPositions();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

