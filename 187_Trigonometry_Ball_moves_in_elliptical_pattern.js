javascript:(
/* Trigonometry_Ball_moves_in_elliptical_pattern.js */
function()
{
    let ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    document.body.append(ball);

    /* initial pos and params for ellipse */
    let angle = 0;

    let xPos = 300;
    let yPos = 200;

    /* horizontal radius */
    let a = 150;

    /* vertical radius */
    let b = 100;

    function updatePosition()
    {
        let x = xPos + a * Math.cos(angle);
        let y = yPos + b * Math.sin(angle);

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

