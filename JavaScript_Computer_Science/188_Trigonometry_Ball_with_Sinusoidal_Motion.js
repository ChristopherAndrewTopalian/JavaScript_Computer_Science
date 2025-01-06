javascript:(
/* Trigonometry_Ball_with_Sinusoidal_Motion.js */
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

    /* pos and paras for sine wave */
    let angle = 0;

    let xPos = 0;
    let yPos = 100;

    /* amplitude of wave (vertical size) */
    let amplitude = 100;

    /* frequency of wave (speed) */
    let frequency = 0.2;

    function updatePosition()
    {
        /* horizontal motion */
        let x = xPos + angle * 50;
        
        /* vertical motion using sine function */
        let y = yPos + amplitude * Math.sin(angle * frequency);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* adjust angle increment for speed */
        angle += 0.05;

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

