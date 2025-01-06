javascript:(
/* Trigonometry_Ball_Spiral_motion_starts_outside_to_center.js */
function()
{
    let ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    document.body.append(ball);

    /* initial pos, params for inward spiral motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 200;

    /* start from the outer edge */
    let radius = 200;
    let angularSpeed = 0.05;

    /* positive radial speed for inward movement */
    let radialSpeed = 1;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);
        let y = yPos + radius * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        angle += angularSpeed;

        /* decrease the radius to move inward */
        radius -= radialSpeed;

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

