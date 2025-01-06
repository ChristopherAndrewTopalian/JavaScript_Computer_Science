javascript:(
/* Trigonometry_Ball_moves_in_Spiral_pattern.js */
function()
{
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /* set initial pos and parameters for spiral motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 400;

    let radius = 5;

    let angularSpeed = 0.05;

    let radialSpeed = 1;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);
        let y = yPos + radius * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        angle += angularSpeed;

        radius += radialSpeed;

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

