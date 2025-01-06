javascript:(
/* Ball_Bouncing_with_Gravity_and_Damping.js */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    document.body.append(ball);

    /* set initial pos, velocity, and parameters */
    let y = 0;

    let velocity = 0;

    let xPos = 200;

    let initialY = 100;

    /* acceleration due to gravity */
    let gravity = 0.5;

    /* damping factor (controls bounce) */
    let damping = 0.8;

    function updatePosition()
    {
        /* apply gravity */
        velocity += gravity;

        /* update vertical position */
        y += velocity;

        /* bounce when ball reaches the floor */
        if (y >= window.innerHeight - 50)
        {
            /* prevent ball from going below floor */
            y = window.innerHeight - 50;

            /* reverse velocity with damping */
            velocity *= -damping;
        }

        ball.style.left = xPos + 'px';

        ball.style.top = y + 'px';
    
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

