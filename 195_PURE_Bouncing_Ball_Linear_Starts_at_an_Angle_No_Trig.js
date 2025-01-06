javascript:(
/* Bouncing_Ball_Linear_Starts_at_an_Angle_No_Trig.js */
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

    function animateBall(ball, x, y, dx, dy) {
        x += dx;
        y += dy;

        /* check for collision with left/right edges */
        if (x < 0 || x > window.innerWidth - ball.clientWidth)
        {
            dx = -dx;
        }

        /* check for collision with top/bottom edges */
        if (y < 0 || y > window.innerHeight - ball.clientHeight)
        {
            dy = -dy;
        }

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        return { x: x, y: y, dx: dx, dy: dy };
    }

    function gameLoop(ball, x, y, dx, dy)
    {
        let { x: newX, y: newY, dx: newDx, dy: newDy } = animateBall(ball, x, y, dx, dy);

        requestAnimationFrame(function()
        {
            gameLoop(ball, newX, newY, newDx, newDy);
        });
    }

    function startBouncingBall()
    {
        let ball = createBall();
        let initialX = 0;
        let initialY = 0;
        let initialDX = 5;
        let initialDY = 5;

        gameLoop(ball, initialX, initialY, initialDX, initialDY);
    }

    startBouncingBall();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

