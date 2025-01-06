javascript:(
/* Newtons_First_Law_of_Motion_The_Law_of_Inertia.js */
function()
{
    function createMovingSquare()
    {
        let box = document.createElement("div");
        box.style.position = "absolute";
        box.style.top = "50px";
        box.style.left = "50px";
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.backgroundColor = "aqua";
        document.body.append(box);

        /* starting velocity */
        let velocity = 1;

        function animate()
        {
            /* move the box horizontally */
            box.style.left = parseInt(box.style.left) + velocity + "px";

            /* check if box has reached right edge */
            if (parseInt(box.style.left) + parseInt(box.style.width) >= window.innerWidth)
            {
                /* reverse direction */
                velocity = -1;
            }

            /* check if box has reached left edge */
            if (parseInt(box.style.left) <= 0)
            {
                /* reverse direction */
                velocity = 1;
            }
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createMovingSquare();

}());

/*
Newton's First Law of Motion - an object will keep going in its current state of motion unless an external force acts on it.

In this script, the object continues moving freely until it encounters the screen's edges.

When it hits a wall, it changes direction by bouncing off with an equal and opposite force to its original motion.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

