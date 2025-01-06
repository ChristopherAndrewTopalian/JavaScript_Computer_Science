javascript:(
/* Bouncing_Ball_Linear_Bounces_Up_Down_No_Trig.js */
function()
{
    function createBall()
    {
        let ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.position = "absolute";
        ball.style.width = "50px";
        ball.style.height = "50px";
        ball.style.borderRadius = "50%";
        ball.style.margin = "0px";
        ball.style.overflow = "hidden";
        ball.style.backgroundColor = "aqua";
        document.body.append(ball);
        return ball;
    }

    function animateBall(ball, position, direction, speed)
    {
        position += direction * speed;
        ball.style.top = position + 'px';

        /* reverse direction at top or bottom */
        if (position >= (window.innerHeight - 50) || position <= 0)
        {
            direction *= -1;
        }

        return { position: position, direction: direction };
    }

    function gameLoop(ball, position, direction, speed)
    {
        let { position: newPosition, direction: newDirection } = animateBall(ball, position, direction, speed);

        requestAnimationFrame(function()
        {
            gameLoop(ball, newPosition, newDirection, speed);
        });
    }

    function startBouncingBall()
    {
        let ball = createBall();
        let initialPosition = 0;
        let initialDirection = 1;
        let speed = 2;

        gameLoop(ball, initialPosition, initialDirection, speed);
    }

    startBouncingBall();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

