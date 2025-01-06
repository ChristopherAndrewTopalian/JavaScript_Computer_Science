javascript:(
/* Bouncing_Ball_Linear_Starts_at_an_Angle_No_Trig.js */
function()
{
    function createBallWithMotion()
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

        let x = 0;
        let y = 0;

        let dx = 5;
        let dy = 5;

        function animate()
        {
            x += dx;
            y += dy;

            if (x < 0 || x > window.innerWidth - ball.clientWidth)
            {
                dx = -dx;
            }

            if (y < 0 || y > window.innerHeight - ball.clientHeight)
            {
                dy = -dy;
            }

            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createBallWithMotion();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

