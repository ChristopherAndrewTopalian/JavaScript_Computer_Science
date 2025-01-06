javascript:(
/* Trigonometry_Ball_Moves_in_a_Circle.js */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /*-*/

    /* set the initial position */
    let angle = 0;

    let xPos = 100;
    let yPos = 100;

    let radius = 100;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);

        let y = yPos + radius * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* angle increment for speed */
        angle += 0.02;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

