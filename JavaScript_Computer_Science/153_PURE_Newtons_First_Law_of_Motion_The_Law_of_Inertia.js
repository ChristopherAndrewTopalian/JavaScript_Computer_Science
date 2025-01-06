javascript:(
/* Newtons_First_Law_of_Motion_The_Law_of_Inertia.js */
function()
{
    function createBox()
    {
        let box = document.createElement("div");
        box.style.position = "absolute";
        box.style.top = "50px";
        box.style.left = "50px";
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.backgroundColor = "aqua";
        document.body.append(box);
        return box;
    }

    function moveBox(box, velocity)
    {
        box.style.left = parseInt(box.style.left) + velocity + "px";
    }

    function calculateNextVelocity(box, velocity)
    {
        let boxLeft = parseInt(box.style.left);
        let boxWidth = parseInt(box.style.width);

        /* reverse direction if box hits right edge */
        if (boxLeft + boxWidth >= window.innerWidth)
        {
            return -1;
        }

        /* reverse direction if box hits left edge */
        if (boxLeft <= 0)
        {
            return 1;
        }

        return velocity;
    }

    function gameLoop(box, velocity)
    {
        moveBox(box, velocity);
        velocity = calculateNextVelocity(box, velocity);

        requestAnimationFrame(function()
        {
            gameLoop(box, velocity);
        });
    }

    function startAnimation()
    {
        let box = createBox();
        let velocity = 1;
        gameLoop(box, velocity);
    }

    startAnimation();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

